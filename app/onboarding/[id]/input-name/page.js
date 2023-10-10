"use client";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams, useRouter } from "next/navigation";

export default function InputName() {
  const params = useParams();
  const { id } = params;
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  const [apiError, setApiError] = useState(false);

  const getData = async () => {
    const { data, error } = await supabase
      .from("onboarding")
      .select("*") // selects all columns
      .eq("id", id) // filters rows where the column "id" equals the variable id
      .single(); // expects a single row in response

    if (error) {
      console.error("Error fetching onboarding data:", error);
      return;
    }

    if (data) {
      setFirstName(data.firstname);
      setLastName(data.lastname);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName) {
      setFnError(true);
      return;
    }
    if (!lastName) {
      setLnError(true);
      return;
    }

    updateOnBoarding();
  };
  const updateOnBoarding = async () => {
    const res = await supabase
      .from("onboarding")
      .update({
        firstname: firstName,
        lastname: lastName,
      })
      .eq("id", id)
      .select();

    if (res.error) {
      setApiError(true);
      console.log("error updating onbaording", res.error);
    } else {
      router.push("bank-details");
      console.log("res", res.data);
    }
  };
  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Create Your Profile
      </h1>
      {apiError ? (
        <EmptyFieldError errorMessage={"Api Response Error"} />
      ) : (
        <></>
      )}

      <div>
        <StandardInputWIthLabel
          id={"firstName"}
          label={"First Name"}
          name={"firstName"}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        {fnError ? (
          <EmptyFieldError errorMessage={"Enter your first Name"} />
        ) : (
          <></>
        )}
      </div>

      <div>
        <StandardInputWIthLabel
          id={"lastName"}
          label={"Last Name"}
          name={"lastName"}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

        {lnError ? (
          <EmptyFieldError errorMessage={"Enter your last Name"} />
        ) : (
          <></>
        )}
      </div>

      <div className="h-2" />
      <StandardButtonGreen btnText={"next"} onClick={handleSubmit} />
    </div>
  );
}
