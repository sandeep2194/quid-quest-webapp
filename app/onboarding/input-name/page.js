"use client"

import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { useState } from "react"

export default function InputName() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fnError, setFnError] = useState(false);
    const [lnError, setLnError] = useState(false);
    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Create Your Profile</h1>

            <div>
                <StandardInputWIthLabel
                    id={"firstName"}
                    label={"First Name"}
                    name={"firstName"}
                    onChange={e => setFirstName(e.target.value)
                    } />
                {
                    fnError ? <EmptyFieldError errorMessage={"Enter your first Name"} /> : <></>
                }
            </div>

            <div>
                <StandardInputWIthLabel
                    id={"lastName"}
                    label={"Last Name"}
                    name={"lastName"}
                    onChange={e => setLastName(e.target.value)
                    } />

                {
                    lnError ? <EmptyFieldError errorMessage={"Enter your last Name"} /> : <></>
                }
            </div>

            <div className="h-2" />
            <StandardButtonGreen
                btnText={"next"}
                href={"phone-number"}
            />

        </div>
    )
}