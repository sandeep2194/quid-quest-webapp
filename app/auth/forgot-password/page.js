// /auth/forgot-password/page.js
"use client";
import { useState } from "react";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import forgotPassword from "@/app/firebase/auth/forgot-password";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleForm(event) {
    event.preventDefault();

    const { result, error } = await forgotPassword(email);

    if (error) {
      setError(error);
      return console.log(error);
    }

    // else successful
    console.log(result);
  }

  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Forgot Password
      </h2>

      <form onSubmit={handleForm}>
        <StandardInputWIthLabel
          id={"email"}
          label={"Enter email to get reset link "}
          name={"email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="h-2" />
        <button
          className={
            "flex justify-center w-full rounded-lg bg-[#2BB529] hover:bg-green-500 px-3 py-3 text-md font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          }
          type="submit"
        >
          {"Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
