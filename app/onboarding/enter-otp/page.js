"use client"

import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import CustomButton from "@/app/lib/Buttons/CustomButton";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { useState } from "react"

export default function EnterOtp() {

    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("Phone Number")

    return (
        <div className="flex flex-col justify-centers space-y-6">
            <div>
                <p className="text-left text-xl font-bold text-gray-800">OTP sent on <u className="text-indigo-900">{phoneNumber}</u></p>
                <a href="phone-number" className=" text-left text-sm mt-1 text-red-500">Edit Number ?</a>
            </div>
            <div>
                <StandardInputWIthLabel
                    id={"otp"}
                    label={"Enter OTP"}
                    name={"OTP"}
                    onChange={e => setOtp(e.target.value)
                    } />
                {
                    otpError ? <EmptyFieldError errorMessage={"OTP does not match !"} /> : <></>
                }
            </div>


            <div className="h-2" />
            <div className="flex flex-row w-full space-x-5">
                <CustomButton
                    btnText={"Resend otp"}
                    href={"enter-otp"}
                    color={"[#972DC9]"}
                    hoverColor={"purple-600"}
                />

                <StandardButtonGreen
                    btnText={"Verify"}
                    href={"verification-successful"}
                />
            </div>
        </div>
    )
}