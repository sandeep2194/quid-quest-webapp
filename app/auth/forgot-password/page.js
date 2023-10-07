"use client"
import { useState } from "react"
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen"
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel"

export default function ForgotPassword() {

    const [email, setEmail] = useState('')
    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Forgot Password</h2>

            <StandardInputWIthLabel
                id={"email"}
                label={"Enter email to get reset link "}
                name={"email"}
                type={"email"}
                onChange={e => setEmail(e.target.value)
                } />

            <div className="h-2" />
            <StandardButtonGreen
                btnText={"Send Link"}
                href={"reset-password"}
            />
        </div>)
}
