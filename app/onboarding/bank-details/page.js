"use client"

import { useState } from "react";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";

export default function InputBankDetails() {
    const [accountNumber, setAccountNumber] = useState("");
    const [transitNumber, setTransitNumber] = useState("");
    const [instituteNumber, setInstituteNumber] = useState("");

    const [anError, setAnError] = useState(false);
    const [tnError, setTnError] = useState(false);
    const [inError, setInError] = useState(false);

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Let's get your Bank details</h1>

            <div>
                <StandardInputWIthLabel
                    id={"accountNumber"}
                    label={"Account Number"}
                    name={"accountNumber"}
                    type={"number"}
                    onChange={e => setAccountNumber(e.target.value)
                    } />
                {
                    anError ? <EmptyFieldError errorMessage={"Enter your Account Number"} /> : <></>
                }
            </div>

            <div>
                <StandardInputWIthLabel
                    id={"transitNumber"}
                    label={"Transit Number"}
                    name={"transitNumber"}
                    type={"number"}
                    onChange={e => setTransitNumber(e.target.value)
                    } />

                {
                    tnError ? <EmptyFieldError errorMessage={"Enter your Transit Number"} /> : <></>
                }
            </div>

            <div>
                <StandardInputWIthLabel
                    id={"instituteNumber"}
                    label={"Institute Number"}
                    name={"instituteNumber"}
                    type={"number"}
                    onChange={e => setInstituteNumber(e.target.value)
                    } />

                {
                    inError ? <EmptyFieldError errorMessage={"Enter your Institute Number"} /> : <></>
                }
            </div>

            <div className="h-2" />

            <StandardButtonGreen
                btnText={"next"}
                href={"final-verification"}
            />

        </div>
    )
}