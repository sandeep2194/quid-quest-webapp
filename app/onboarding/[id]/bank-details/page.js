"use client";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams, useRouter } from "next/navigation";

export default function InputBankDetails() {
  const [accountNumber, setAccountNumber] = useState("");
  const [transitNumber, setTransitNumber] = useState("");
  const [instituteNumber, setInstituteNumber] = useState("");
  const params = useParams();
  const { id } = params;
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [anError, setAnError] = useState(false);
  const [tnError, setTnError] = useState(false);
  const [inError, setInError] = useState(false);
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
      setAccountNumber(data.accountnumber || "");
      setInstituteNumber(data.institutenumber || "");
      setTransitNumber(data.transitnumber || "");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accountNumber) {
      setAnError(true);
      return;
    }
    if (!transitNumber) {
      setTnError(true);
      return;
    }

    if (!instituteNumber) {
      setInError(true);
      return;
    }

    updateOnBoarding();
  };
  const updateOnBoarding = async () => {
    const res = await supabase
      .from("onboarding")
      .update({
        accountnumber: parseInt(accountNumber),
        transitnumber: parseInt(transitNumber),
        institutenumber: parseInt(instituteNumber),
      })
      .eq("id", id)
      .select();

    if (res.error) {
      setApiError(true);
      console.log("error updating onbaording", res.error);
    } else {
      router.push("final-verification");
      console.log("res", res.data);
    }
  };
  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Let's get your Bank details
      </h1>
      {apiError ? (
        <EmptyFieldError errorMessage={"Api Response Error"} />
      ) : (
        <></>
      )}

      <div>
        <StandardInputWIthLabel
          id={"accountNumber"}
          label={"Account Number"}
          name={"accountNumber"}
          type={"number"}
          onChange={(e) => setAccountNumber(e.target.value)}
          value={accountNumber}
        />
        {anError ? (
          <EmptyFieldError errorMessage={"Enter your Account Number"} />
        ) : (
          <></>
        )}
      </div>

      <div>
        <StandardInputWIthLabel
          id={"transitNumber"}
          label={"Transit Number"}
          name={"transitNumber"}
          type={"number"}
          onChange={(e) => setTransitNumber(e.target.value)}
          value={transitNumber}
        />

        {tnError ? (
          <EmptyFieldError errorMessage={"Enter your Transit Number"} />
        ) : (
          <></>
        )}
      </div>

      <div>
        <StandardInputWIthLabel
          id={"instituteNumber"}
          label={"Institute Number"}
          name={"instituteNumber"}
          type={"number"}
          onChange={(e) => setInstituteNumber(e.target.value)}
          value={instituteNumber}
        />

        {inError ? (
          <EmptyFieldError errorMessage={"Enter your Institute Number"} />
        ) : (
          <></>
        )}
      </div>

      <div className="h-2" />

      <StandardButtonGreen btnText={"next"} onClick={handleSubmit} />
    </div>
  );
}
