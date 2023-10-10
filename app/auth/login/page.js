// /auth//page.js
"use client";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { useState } from "react";
import Link from "next/link";
import signIn from "@/app/firebase/auth/signin";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter()

  async function handleForm(event) {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
        setError(error)
      return console.log(error);
    }

    // else successful
    router.push('/dashboard')
    console.log(result);
  }

  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Login
      </h1>

      {error ? (
        <p className="mt-1 font-semibold leading-6 text-center text-lg text-red-500">
          Your credentials does not match !
        </p>
      ) : (
        <></>
      )}
      <form onSubmit={handleForm}>
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
        {/* had to use new button because on running handle form function the StandardButtonGreen was going to the href and funtion was not able to run*/}
        <button
                className={"flex justify-center w-full rounded-lg bg-[#2BB529] hover:bg-green-500 px-3 py-3 text-md font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                type="submit"
            >
                {"LOGIN"}
            </button>

        <Link
          href="forgot-password"
          className="mt-1 leading-6 text-right text-sm text-green-500 hover:text-green-600"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
}
