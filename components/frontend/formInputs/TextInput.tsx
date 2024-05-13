type TextInputProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  type?: string;
};

export default function TextInput({
  label,
  name,
  errors,
  register,
  type,
}: TextInputProps) {
  const classes = `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-gray-300
${errors[name] ? "focus:ring-red-600" : "focus:ring-indigo-600"}`;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: true })}
          id={name}
          name={name}
          type={type ? type : "text"}
          autoComplete="name"
          className={classes}
        />

        {errors[name] && (
          <span className="text-red-600 text-start">{label} is required</span>
        )}
      </div>
    </div>
  );
}
