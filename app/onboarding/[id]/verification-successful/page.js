import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";

export default function () {
    return (
        <div className="p-8 rounded-xl shadow-2xl sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-4xl font-bold leading-none tracking-tight text-gray-900 mb-8">
                VERIFICATION SUCCESSFUL
            </h2>
            <StandardButtonGreen
                btnText={"Next"}
                href={"bank-details"}
            >
            </StandardButtonGreen>
        </div>
    )
}