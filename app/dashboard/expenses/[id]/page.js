'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { PhotoIcon } from '@heroicons/react/24/solid'

export default function editExpense() {
    const supabase = createClientComponentClient();
    const { id } = useParams();
    const router = useRouter();

    const [cats, setCats] = useState([])
    const [deps, setDeps] = useState([])
    const [cat, setCat] = useState(null)
    const [dep, setDep] = useState(null)
    const [am, setAm] = useState("")
    const [empName, setEmpname] = useState("")
    const [att, setAtt] = useState(null)
    const [file, setFile] = useState(null); // State for the file to be uploaded
    const [desc, setDesc] = useState("");
    const [uploading, setUploading] = useState(false); // State to show uploading progress

    const status = 'pending';

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const uploadFile = async () => {
        if (!file) return;

        setUploading(true);
        try {
            // You can add metadata or custom file paths as needed
            const filePath = `/${file.name}`;
            let { error } = await supabase.storage.from('attachment').upload(filePath, file);

            if (error) throw error;

            const url = await supabase.storage.from('attachment').getPublicUrl(filePath)
            setAtt(url.data.publicUrl)
            // Here you might want to save the file path or URL to your database
            alert('File uploaded successfully!');
        } catch (error) {
            alert('Error uploading file: ', error.message);
        } finally {
            setUploading(false);
        }
    };

    async function getCatDeps() {
        const depDetails = JSON.parse(localStorage.getItem("departmentDetails"))
        const departmentIdOfUser = depDetails.id;

        const comDetails = JSON.parse(localStorage.getItem("companyDetails"))
        const companyId = comDetails.id;

        const empDetails = JSON.parse(localStorage.getItem("employeeDetails"))
        const employeeId = empDetails.id

        const req = await supabase.auth.getUser();
        const userId = req.data.user.id;

        return {
            departmentIdOfUser,
            companyId,
            employeeId,
            userId
        }
    }
    async function handleDownload() {
        if (!att) {
            alert('No file to download');
            return;
        }

        // Assuming `att` is the direct URL to the file you want to download
        try {
            // Fetching the file using the stored URL
            const response = await fetch(att);
            if (!response.ok) throw new Error('Network response was not ok.');
            const blob = await response.blob();

            // Create a local URL for the fetched file
            const localUrl = URL.createObjectURL(blob);

            // Creating a temporary anchor element to trigger download
            const a = document.createElement('a');
            a.href = localUrl;
            a.download = att.split('/').pop(); // Or use another way to determine the filename
            document.body.appendChild(a);
            a.click();

            // Clean up the URL and remove the element
            URL.revokeObjectURL(a.href);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download error:', error.message);
            alert('Error downloading file: ' + error.message);
        }
    }

    async function handleApprove() {
        try {
            const { error } = await supabase
                .from('expenses')
                .update({ status: 'approved' })
                .eq('id', id);

            if (error) {
                throw error;
            }

            alert('Expense approved successfully!');
            router.push("/dashboard/expenses")
        } catch (error) {
            console.error('error', error);
            alert('Error approving expense: ', error.message);
        }
    }

    async function handleDisapprove() {
        try {
            const { error } = await supabase
                .from('expenses')
                .update({ status: 'disapproved' })
                .eq('id', id);

            if (error) {
                throw error;
            }

            alert('Expense disapproved successfully!');
            router.push("/dashboard/expenses")
        } catch (error) {
            console.error('error', error);
            alert('Error disapproving expense: ', error.message);
        }
    }


    async function getExpense() {
        try {
            const { data: expense } = await supabase.from('expenses').select('*').eq('id', id);
            const { data: employee } = await supabase.from('employeedata').select('*').eq('id', expense[0].employee);

            setAm(expense[0].amount)
            setAtt(expense[0].attachment)
            setCat(expense[0].category)
            setDep(expense[0].department)
            setDesc(expense[0].description)
            setEmpname(employee[0].firstname + " " + employee[0].lastname)

        } catch (error) {
            console.log('error in gettign expense: ', error)
        }
    }

    useEffect(() => {
        setCats(JSON.parse(localStorage.getItem("categories")));
        setDeps(JSON.parse(localStorage.getItem("departments")));
        getExpense()
    }, [])

    useEffect(() => {
        uploadFile();
    }, [file])

    return (
        <form>
            <div className="space-y-12 md:w-1/3 m-auto">
                <div className="pb-12">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900 text-left">Expense Details</h2>


                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/* Added by */}
                        <div className="sm:col-span-full">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Added By
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="employee-name"
                                    id="employee-name"
                                    autoComplete="given-name"
                                    readOnly={true}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 pl-4"
                                    value={empName}
                                />
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="sm:col-span-full">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Amount
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
                                    <input
                                        type="text"
                                        name="amount"
                                        id="amount"
                                        autoComplete="amount"
                                        readOnly={true}
                                        className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-4"
                                        placeholder=""
                                        value={am}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* department */}
                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Department
                            </label>
                            <div className="mt-2">
                                <input
                                    id="department"
                                    name="department"
                                    type="text"
                                    autoComplete="department"
                                    readOnly={true}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 pl-4"
                                    value={deps.find(d => d.id == dep) ? deps.find(d => d.id == dep).name : ""}
                                />
                            </div>
                        </div>

                        {/* category */}
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Category"
                                    id="Category"
                                    autoComplete="street-address"
                                    readOnly={true}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 pl-4"
                                    value={cats.find(c => c.id == cat) ? cats.find(c => c.id == cat).name : ""}
                                />
                            </div>
                        </div>

                        {/* Attached File */}
                        <div className="col-span-full">
                            <label htmlFor="attached-file" className="block text-sm font-medium leading-6 text-gray-900">
                                Attached File
                            </label>
                            <div className="mt-2 flex justify-start rounded-lg border border-dashed border-gray-900/25 py-1.5">
                                <div className="flex flex-row px-2 items-center space-x-2">
                                    <PhotoIcon className="h-8 w-8 text-gray-300" aria-hidden={true} />
                                    <div className=" text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-gray focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500 pl-4"
                                        >
                                            <span onClick={handleDownload}>Download File</span>
                                            {/* <input id="file-upload" name="file-upload" type="file" className="sr-only" /> */}
                                        </label>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    readOnly={true}
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 pl-4"
                                    value={desc}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* buttons */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        onClick={handleDisapprove}
                    >
                        Disapprove
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        onClick={handleApprove}
                    >
                        Approve
                    </button>
                </div>
            </div>


        </form>
    )
}
