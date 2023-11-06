'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
let statuses = ["pending", "approved", "disapproved"];
export default function expenseList() {
    const [expenses, setExpenses] = useState([])
    const [cats, setCats] = useState([])
    const [deps, setDeps] = useState([])
    const [selectedCat, setSelectedCat] = useState(null);
    const [selectedDep, setSelectedDep] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const supabase = createClientComponentClient()

    async function getExpenses() {
        const { data, error } = await supabase.rpc('get_expenses_formatted')

        if (error) {
            console.log("error getting expenses", error)
        } else {
            setExpenses(data)
        }
    }

    function getCatDeps() {
        setCats(JSON.parse(localStorage.getItem("categories")));
        setDeps(JSON.parse(localStorage.getItem("departments")));
    }

    const fetchFilteredExpenses = async (category_filter_id, department_filter_id, expense_status) => {
        const { data, error } = await supabase
            .rpc('get_filtered_expenses', { category_filter_id, department_filter_id, expense_status });

        if (error) {
            console.error('error fetching filtered expenses:', error);
            return;
        }

        setExpenses(data);
    };

    useEffect(() => {
        getExpenses()
        getCatDeps()
    }, [])

    useEffect(() => {
        fetchFilteredExpenses(selectedCat, selectedDep, selectedStatus);
    }, [selectedCat, selectedDep, selectedStatus])

    return (
        <>
            <div className="flex flex-row justify-between  items-center mb-6">

                <h1 className="text-2xl font-bold text-green-900 ">Expense List</h1>
                <button
                    type="button"
                    className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Add Expense
                </button>
            </div>
            {/* filter div */}
            <div className="flex flex-wrap w-fit gap-2 md:flex-row md:space-x-4 md:space-y-0" >
                {/* filter by department */}
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedCat ? cats.find(c => c.id == selectedCat).name : "filter by category"}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="relative right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {
                                    cats && cats.map(c =>
                                        <Menu.Item key={c.id}>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    onClick={() => setSelectedCat(c.id)}
                                                >
                                                    {c.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    )
                                }


                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>


                {/* search by status */}
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedDep ? deps.find(d => d.id == selectedDep).name : "filter by department"}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="relative right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">

                                {
                                    deps && deps.map((d) =>
                                        <Menu.Item key={d.id}>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    onClick={() => setSelectedDep(d.id)}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {d.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    )
                                }
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedStatus ? selectedStatus : "filter by status"}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="relative right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {statuses && statuses.map((s) =>
                                    <Menu.Item key={s}>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                onClick={() => setSelectedStatus(s)}
                                            >
                                                {s}
                                            </a>
                                        )}
                                    </Menu.Item>
                                )}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {/* expense list */}
            <div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Expense Id
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Department
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Category
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Price
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Status
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {expenses.map((expense) => (
                                            <tr key={expense.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {expense.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.department}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.category}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.amount}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{expense.status}</td>

                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href={"/dashboard/expenses/" + expense.id} className="text-red-600 hover:text-red-900">
                                                        Edit<span className="sr-only">, {expense.id}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}