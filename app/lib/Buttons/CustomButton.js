import Link from "next/link";

function CustomButton({ btnText, href, color, hoverColor, width = "full" }) {

    return (

        <Link href={href} className="w-full">
            <button
                className={`flex justify-center w-${width} rounded-lg bg-${color} hover:bg-${hoverColor} px-3 py-3 text-md font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
                {btnText.toUpperCase()}
            </button>
        </Link>
    )
}

export default CustomButton;