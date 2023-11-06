'use client'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FolderIcon } from '@heroicons/react/24/solid'
import { PhotoIcon } from '@heroicons/react/24/solid'

export default function addExpense() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (

        <form>
            <div className="space-y-12 md:m-10">
                <div>
                    <h2 className="text-2xl bg-green-950 text-center p-4 font-semibold text text-white">Add Expense</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gray-100 p-8 rounded-lg shadow-md">

                        {/* category */}
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2 flex sm:max-w-md">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            Filter by Category
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
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Food
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Accomodation
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Travel
                                                        </a>
                                                    )}
                                                </Menu.Item>

                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                            </div>

                        </div>

                        {/* expense amount */}
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Amount
                            </label>
                            <div className="mt-2 bg-white">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Enter expense here"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* upload file */}
                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Attach File
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-white">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={5}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>

                        </div>

                        {/* save or cancel  */}
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </form >


    )
}