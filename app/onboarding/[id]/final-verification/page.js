"use client";

import { useState, useEffect } from "react";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams, useRouter } from "next/navigation";

export default function FinalVerification() {
  const [accountNumber, setAccountNumber] = useState("");
  const [transitNumber, setTransitNumber] = useState("");
  const [instituteNumber, setInstituteNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const params = useParams();
  const { id } = params;
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  const [anError, setAnError] = useState(false);
  const [tnError, setTnError] = useState(false);
  const [inError, setInError] = useState(false);

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
      setFirstName(data.firstname || "");
      setLastName(data.lastname || "");
      setAccountNumber(data.accountnumber || "");
      setInstituteNumber(data.institutenumber || "");
      setTransitNumber(data.transitnumber || "");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="flex flex-col justify-centers space-y-6">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Verify Details
      </h1>
      <div>
        <StandardInputWIthLabel
          id={"firstName"}
          label={"First Name"}
          name={"firstName"}
          onChange={(e) => setFirstName(e.target.value)}
          readonly={true}
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
          readonly={true}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

<<<<<<< HEAD
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
=======
        {lnError ? (
          <EmptyFieldError errorMessage={"Enter your last Name"} />
        ) : (
          <></>
        )}
      </div>
>>>>>>> main

      {/* <div>
        <div className="flex flex-row justify-between">
          <label className="block text-lg leading-6 text-gray-900 font-semibold">
            Phone Number
          </label>
          <a
            href="phone-number"
            className=" text-left text-sm mt-1 text-red-500"
          >
            Edit Number ?
          </a>
        </div>
        <div className="mt-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            readonly={true}
            type="number"
            required
            className="block w-full rounded-lg border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
          />
        </div>
      </div> */}

      <div>
        <StandardInputWIthLabel
          id={"accountNumber"}
          label={"Account Number"}
          name={"accountNumber"}
          readonly={true}
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
          readonly={true}
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
          readonly={true}
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

      <StandardButtonGreen btnText={"next"} href="" />
    </div>
  );
}
