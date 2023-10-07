import Link from "next/link";

function StandardHalfButtonPurple({ btnText, href }) {

    return (

        <Link href={href}>

            <button
                className={"flex justify-center rounded-lg bg-[#972DC9] hover:bg-purple-600 px-3 py-3 text-md font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
            >
                {btnText.toUpperCase()}
            </button>
        </Link>
    )
}

export default StandardHalfButtonPurple;