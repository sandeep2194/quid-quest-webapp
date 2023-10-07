"use client"
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(true);

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Reset your Password</h1>

            {
                error ? <p className="mt-1 font-semibold leading-6 text-center text-lg text-red-500">
                    Your password does not match !
                </p> : <></>
            }

            <StandardInputWIthLabel
                id={"password"}
                label={"Password"}
                name={"password"}
                type={"password"}
                onChange={e => setPassword(e.target.value)
                } />

            <StandardInputWIthLabel
                id={"confirmPasssword"}
                label={"Confirm Password"}
                name={"pconfirmPassword"}
                type={"password"}
                onChange={e => setConfirmPassword(e.target.value)
                } />

            <div className="h-2" />
            <StandardButtonGreen
                btnText={"Submit"}
                href={"login"}
            />
        </div>
    )
}
