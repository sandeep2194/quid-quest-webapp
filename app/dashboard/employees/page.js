"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DropdownBoxFunction from "@/app/lib/Dropdown/DropdownWithScroll";
import EmployeeTable from "@/app/lib/Tables/EmployeeTable";
import Link from "next/link";
import InviteByEmail from "./inviteByEmail";

export default function Employees() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <>
      <h2 className="text-2xl bg-green-950 text-center p-4 font-semibold text text-white">
        EMPLOYEES
      </h2>

      <div className="bg-gray-100 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Search and Filters */}

          <div className="mb-4 flex flex-row md:justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="relative mt-2 rounded-md shadow-sm mr-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-1 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  placeholder="search by name"
                />
              </div>
              <DropdownBoxFunction></DropdownBoxFunction>
            </div>
            <button
              className="hidden bg-[#2BB529] rounded-md text-white w-auto md:flex flex-row font-semibold text-xl p-2"
              onClick={() => setShowInviteModal(true)}
            >
              + Invite
            </button>
          </div>

          {/** table to show list of employees */}
          <EmployeeTable></EmployeeTable>
        </div>
      </div>
      <Link href="/invite-employee">
        <button className="absolute bottom-0 left-0 bg-[#2BB529] text-white text-xl font-medium w-full p-4 text-center mt-4 md:hidden">
          + INVITE NEW EMPLOYEE
        </button>
      </Link>
      <InviteByEmail
        showModal={showInviteModal}
        setShowModal={setShowInviteModal}
      />
    </>
  );
}
