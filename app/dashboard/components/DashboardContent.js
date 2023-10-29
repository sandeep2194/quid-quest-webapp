'use client'
import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function DashboardContent() {
    const [activeTab, setActiveTab] = useState('category'); // Default to 'category', can also be 'department'
    const [expenseData, setExpenseData] = useState(null);
    const supabase = createClientComponentClient(); // Make sure you initialize this properly

    useEffect(() => {
        const fetchExpensesData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user && user.id) {
                const { data, error } = await supabase.rpc('dashboard_expenses', { user_id: user.id, time_period: "this month" });
                if (!error && data) {
                    console.log(data)
                    setExpenseData(data);
                }
            }
        };
        fetchExpensesData();
    }, []);

    if (!expenseData) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container mx-auto p-10">
            {/* Time Filter */}
            <div className="flex mb-5 space-x-4">
                <button className="bg-green-500 text-white px-5 py-2 rounded">Weekly</button>
                <button className="border border-green-500 text-green-500 px-5 py-2 rounded">Monthly</button>
                <button className="border border-green-500 text-green-500 px-5 py-2 rounded">Last Month</button>
            </div>

            {/* Total Expense */}
            <div className="bg-green-500 text-white p-10 mb-5 rounded">
                <h2 className="text-3xl">Total Expense</h2>
                <p className="text-4xl">${expenseData.grand_total}</p>
            </div>

            {/* Department and Employee Count */}
            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="border p-5 rounded">
                    <p className="text-gray-600">Total Department</p>
                    <p className="text-xl">{expenseData.total_departments}</p>
                </div>
                <div className="border p-5 rounded">
                    <p className="text-gray-600">Total Employees</p>
                    <p className="text-xl">{expenseData.total_employees}</p>
                </div>
            </div>

            {/* Category & Department Tabs */}
            <div className="mb-5 flex space-x-4 border-b border-green-500">
                <div
                    onClick={() => setActiveTab('category')}
                    className={`px-5 py-2 cursor-pointer ${activeTab === 'category' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                >
                    Category
                </div>
                <div
                    onClick={() => setActiveTab('department')}
                    className={`px-5 py-2 cursor-pointer ${activeTab === 'department' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                >
                    Department
                </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'category' ? (
                <div className="border rounded p-5">
                    {expenseData.expenses_by_categories && expenseData.expenses_by_categories.length > 0 ? (
                        expenseData.expenses_by_categories.map((expense, index) => (
                            <div key={index} className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <img src="/images/fast-food-sharp.svg" alt={`${expense.name} Icon`} className="mr-2" />
                                    <p>{expense.name}</p>
                                </div>
                                <p>${expense.total}</p>
                            </div>
                        ))
                    ) : (
                        <p>No categories available.</p>
                    )}
                </div>
            ) : (
                <div className="border rounded p-5">
                    {expenseData.expenses_by_departments && expenseData.expenses_by_departments.length > 0 ? (
                        expenseData.expenses_by_departments.map((expense, index) => (
                            <div key={index} className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <img src="/images/fast-food-sharp.svg" alt={`${expense.name} Icon`} className="mr-2" />
                                    <p>{expense.name}</p>
                                </div>
                                <p>${expense.total}</p>
                            </div>
                        ))
                    ) : (
                        <p>No departments available.</p>
                    )}
                </div>
            )}

        </div>
    );
}
