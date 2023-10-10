"use client";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import { useState } from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();
  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (res.error) {
      console.log("error while logig: ", JSON.stringify(res.error));
      setError("Your crendtials do not match");
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Login
      </h1>

      {error ? (
        <p className="mt-1 font-semibold leading-6 text-center text-lg text-red-500">
          {error}
        </p>
      ) : (
        <></>
      )}
      <StandardInputWIthLabel
        id={"email"}
        label={"Email"}
        name={"email"}
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />

      <StandardInputWIthLabel
        id={"passsword"}
        label={"Password"}
        name={"password"}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="h-2" />
      <StandardButtonGreen btnText={"login"} onClick={handleSignIn} />

      <Link
        href="forgot-password"
        className="mt-1 leading-6 text-right text-sm text-green-500 hover:text-green-600"
      >
        Forgot Password?
      </Link>
    </div>
  );
}
