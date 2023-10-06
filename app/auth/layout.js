export const metadata = {
    title: 'Quid Quest Web App - Auth',
    description: 'An Expense Tracker',
}

export default function authLayout({ children }) {
    return (
        <div>
            <h1>Auth Layout</h1>
            <div>{children}</div>
        </div>
    )
}