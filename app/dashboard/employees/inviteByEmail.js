"use client";
import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";
import DropdownBoxFunction from "@/app/lib/Dropdown/DropdownWithScroll";
import EmptyFieldError from "@/app/lib/Errors/EmptyFieldError";
import StandardInputWIthLabel from "@/app/lib/Input/StandardInputWIthLabel";
import InputFieldModal from "@/app/lib/Modals/InputFieldModal";
import { useState } from "react";

export default function InviteByEmail({showModal, setShowModal}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  return (
    <InputFieldModal open={showModal} setOpen={setShowModal}>
      <div className="flex flex-col justify-centers space-y-6 px-6 py-10 rounded-xl shadow-xl w-full h-full">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Invite Employee
        </h1>
        <div>
          <StandardInputWIthLabel
            id={"firstName"}
            label={"First Name"}
            name={"firstName"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {fnError ? (
            <EmptyFieldError errorMessage={"Enter the first Name"} />
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
          />

          {lnError ? (
            <EmptyFieldError errorMessage={"Enter the last Name"} />
          ) : (
            <></>
          )}
        </div>
        <div>
          <StandardInputWIthLabel
            id={"email"}
            label={"Email"}
            name={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError ? (
            <EmptyFieldError errorMessage={"Enter the email"} />
          ) : (
            <></>
          )}
        </div>
        <div>
          <span className="text-lg font-bold">Department</span>
          <DropdownBoxFunction></DropdownBoxFunction>
        </div>

        <div>
          <span className="text-lg font-bold">Title</span>
          <DropdownBoxFunction></DropdownBoxFunction>
        </div>

        <div className="h-2" />
        <StandardButtonGreen
          btnText={"send invitation"}
          href={"phone-number"}
        />
      </div>
    </InputFieldModal>
  );
}
