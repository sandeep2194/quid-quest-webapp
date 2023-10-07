"use client"

import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { useState } from "react"

export default function InputName() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [fnError, setError] = useState(false);

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Verification of Phone Number</h1>

            <div>
                <StandardInputWIthLabel
                    id={"phoneNumber"}
                    label={"Phone Number"}
                    type={"number"}
                    name={"phoneNumber"}
                    onChange={e => setPhoneNumber(e.target.value)
                    } />
                {
                    fnError ? <EmptyFieldError errorMessage={"Enter your Phone Number"} /> : <></>
                }
            </div>


            <div className="h-2" />
            <StandardButtonGreen
                btnText={"send verification code"}
                href={"enter-otp"}
            />

        </div>
    )
}