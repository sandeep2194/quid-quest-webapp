"use client"
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Login</h1>
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
                onChange={e => setEmail(e.target.value)
                } />

            <div className="h-2" />
            <StandardButtonGreen
                btnText={"login"}
                href={"forgot-password"}
            />



        </div>
    )
}
