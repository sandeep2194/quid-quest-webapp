"use client";
import { useState } from "react";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const supabase = createClientComponentClient();
    if (!email) {
      setError(true);
      return;
    }
    const res = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://www.quid.quest/auth/reset-password",
    });
    if (res.error) {
      setError(true);
    } else {
      setMessage(true);
    }
  };
  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Forgot Password
      </h2>
      <p>{error ? "Error occured" : ""}</p>
      <StandardInputWIthLabel
        id={"email"}
        label={"Enter email to get reset link "}
        name={"email"}
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="h-2" />
      <StandardButtonGreen btnText={"Send Link"} onClick={handleSubmit} />
      <p>{message ? "Email Sent. Please check you email" : ""}</p>
    </div>
  );
}
