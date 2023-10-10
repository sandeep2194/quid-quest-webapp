import Link from "next/link";

function StandardButtonGreen({ btnText, href='#', onClick=()=>{console.log("btn green clicked")} }) {

    return (
        <Link href={href} className="w-full">
            <button
                className={"flex justify-center w-full rounded-lg bg-[#2BB529] hover:bg-green-500 px-3 py-3 text-md font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                onClick={onClick}
            >
                {btnText.toUpperCase()}
            </button>
        </Link>
    )
}

export default StandardButtonGreen;