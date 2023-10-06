import Link from "next/link";

function StandardButtonGreen({ btnText, href }) {

    return (
        <Link href={href}>
            <button
                className={"flex justify-center w-full rounded-lg bg-[#2BB529] hover:bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
            >
                {btnText}
            </button>
        </Link>
    )
}

export default StandardButtonGreen;