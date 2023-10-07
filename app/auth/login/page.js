"use client"
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);

    /*
        1) handleSubmit
        2) check from db if user exist and password match
        3) show error if password does not match
    */

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Login</h1>

            {
                error ? <p className="mt-1 font-semibold leading-6 text-center text-lg text-red-500">
                    Your credentials does not match !
                </p> : <></>
            }
            <StandardInputWIthLabel
                id={"email"}
                label={"Email"}
                name={"email"}
                type={"email"}
                onChange={e => setEmail(e.target.value)
                } />

            <StandardInputWIthLabel
                id={"passsword"}
                label={"Password"}
                name={"password"}
                type={"password"}
                onChange={e => setPassword(e.target.value)
                } />

            <div className="h-2" />
            <StandardButtonGreen
                btnText={"login"}
                href={"forgot-password"}
            />

            <Link href="forgot-password" className="mt-1 leading-6 text-right text-sm text-green-500 hover:text-green-600" >
                Forgot Password?
            </Link>



        </div>
    )
}
