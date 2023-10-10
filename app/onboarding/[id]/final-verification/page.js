"use client"

import { useState } from "react";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";

export default function FinalVerification() {
    const [accountNumber, setAccountNumber] = useState("");
    const [transitNumber, setTransitNumber] = useState("");
    const [instituteNumber, setInstituteNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [fnError, setFnError] = useState(false);
    const [lnError, setLnError] = useState(false);
    const [anError, setAnError] = useState(false);
    const [tnError, setTnError] = useState(false);
    const [inError, setInError] = useState(false);

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Verify Details</h1>
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

            <div>
                <div className="flex flex-row justify-between">
                    <label className="block text-lg leading-6 text-gray-900 font-semibold">
                        Phone Number
                    </label>
                    <a href="phone-number" className=" text-left text-sm mt-1 text-red-500">Edit Number ?</a>

                </div>
                <div className="mt-2">
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="number"
                        required
                        className="block w-full rounded-lg border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    />
                </div>

            </div>

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
                href={"create-password"}
            />

        </div>
    )
}