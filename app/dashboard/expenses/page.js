'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"

export default function expenseList() {
    const [expenses, setExpenses] = useState([])
    const supabase = createClientComponentClient()

    async function getExpenses() {
        const { data, error } = await supabase.from('expenses').select('*');

        if (error) {
            console.log("error getting expenses", error)
        } else {
            setExpenses(data)
        }
    }
    return (
        <>
            <div>Expenses</div>
            <div></div>
        </>
    )
}