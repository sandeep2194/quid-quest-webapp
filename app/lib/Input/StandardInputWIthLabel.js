function StandardInputWIthLabel({
  label,
  id,
  name,
  type = "text",
  required = false,
  onChange,
  value,
  readonly = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg leading-6 text-gray-900 font-semibold"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          onChange={onChange}
          className="block w-full rounded-lg border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
          value={value}
          readOnly={readonly}
        />
      </div>
    </div>
  );
}

export default StandardInputWIthLabel;
