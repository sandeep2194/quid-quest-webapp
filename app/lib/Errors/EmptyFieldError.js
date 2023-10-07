function EmptyFieldError({ errorMessage }) {
    return (
        <div>
            <p className="mt-1 text-left text-sm text-red-500">
                {errorMessage}
            </p>
        </div>
    )
}

export default EmptyFieldError