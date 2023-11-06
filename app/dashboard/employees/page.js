"use client";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import EmployeeTable from "@/app/lib/Tables/EmployeeTable";
import InviteByEmail from "./inviteByEmail";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";



export default function Employees() {
  const supabase = createClientComponentClient();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [search, setSearch] = useState(null);

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    let { data, error } = await supabase
      .from('employeedata') // Replace with your Supabase table name
      .select('*');

    if (error) {
      console.log('error', error);
    } else {
      setEmployees(data);
    }
  };

  async function handleSearch(searchTerm) {
    let { data, error } = await supabase.from("employeedata").select('*').filter("firstname", "like", searchTerm);
    if (error) {
      console.log('error', error);
    } else {
      setEmployees(data);
    }
  }

  useEffect(() => {
    if (search) {
      const timeoutId = setTimeout(() => {
        handleSearch(search);
      }, 500);

      // Clear the timeout if the search term changes
      // or if the component is unmounted
      return () => clearTimeout(timeoutId);
    } else {
      fetchEmployees();
    }
  }, [search]);

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
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* <DropdownBoxFunction></DropdownBoxFunction> */}
            </div>
            <button
              className="hidden bg-[#2BB529] rounded-md text-white md:block font-semibold text-xl h-min px-4 py-2"
              onClick={() => setShowInviteModal(true)}
            >
              {"+ Invite"}
            </button>
          </div>

          {/** table to show list of employees */}
          <EmployeeTable people={employees}></EmployeeTable>
        </div>
      </div>
      <button className="absolute bottom-0 left-0 bg-[#2BB529] text-white text-xl font-medium w-full p-4 text-center mt-4 md:hidden"
        onClick={() => setShowInviteModal(true)}
      >
        + INVITE NEW EMPLOYEE
      </button>
      <InviteByEmail
        showModal={showInviteModal}
        setShowModal={setShowInviteModal}
      />
    </>
  );
}
