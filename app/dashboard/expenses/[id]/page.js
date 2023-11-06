
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function editExpense() {
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
                                    readOnly="true"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        readOnly="true"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="120"
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
                                    readOnly="true"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                                    readOnly="true"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                                    <PhotoIcon className="h-8 w-8 text-gray-300" aria-hidden="true" />
                                    <div className=" text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-gray focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                                        >
                                            <span>Download.png</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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
                                    readOnly="true"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* buttons */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Disapprove
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Approve
                    </button>
                </div>
            </div>


        </form>
    )
}
