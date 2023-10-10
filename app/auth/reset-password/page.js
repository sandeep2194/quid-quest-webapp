"use client";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ResetPassword() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!password) {
      setError(true);
      return;
    }
    if (password != confirmPassword) {
      setError(true);
      return;
    }
    const res = await supabase.auth.updateUser({ password: confirmPassword });
    if (res.error) {
      setError(true);
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Reset your Password
      </h1>

      {error ? (
        <p className="mt-1 font-semibold leading-6 text-center text-lg text-red-500">
          something went wrong
        </p>
      ) : (
        <></>
      )}
      {success ? (
        <p className="mt-1 font-semibold leading-6 text-center text-lg text-green-500">
          password updated... redirecting to login page in 3 seconds
        </p>
      ) : (
        <></>
      )}

      <StandardInputWIthLabel
        id={"password"}
        label={"Password"}
        name={"password"}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />

      <StandardInputWIthLabel
        id={"confirmPasssword"}
        label={"Confirm Password"}
        name={"pconfirmPassword"}
        type={"password"}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="h-2" />
      <StandardButtonGreen btnText={"Submit"} onClick={handleReset} />
    </div>
  );
}
