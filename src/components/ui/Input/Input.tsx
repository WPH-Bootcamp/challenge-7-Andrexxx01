

export type InputFieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
  value: string; 
  onChange: (v: string) => void;
};

export type TextAreaFieldProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="w-full h-[82px] flex flex-col gap-s-sm items-start justify-between xl:w-[720px] xl:h-[82px]">
      <label
        htmlFor={id}
        className="w-full h-[28px] text-sm font-bold text-neutral-950 xl:w-[720px] xl:h-[28px] dark:text-neutral-25"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-[48px] rounded-[12px] border-[1px] py-2 px-s-xl [&::placeholder]:text-sm [&::placeholder]:font-medium [&::placeholder]:text-neutral-500 xl:w-[720px] xl:h-[48px] xl:[&::placeholder]:text-md ${
          error
            ? "border-[#d9206e] dark:border-[#d9206e]"
            : "border-[#dfdfdf] dark:border-neutral-800"
        }`}
      />
      {error && <p className="text-xs text-[#d9206e] font-medium">{error}</p>}
    </div>
  );
};

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  name,
  placeholder,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="w-full h-[168px] flex flex-col gap-s-sm items-start justify-between xl:w-[720px] xl:h-[168px]">
      <label
        htmlFor={id}
        className="w-full h-[28px] text-sm font-bold text-neutral-950 xl:w-[720px] xl:h-[28px] dark:text-neutral-25"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-[134px] rounded-[12px] border-[1px] py-2 px-s-xl [&::placeholder]:text-sm [&::placeholder]:font-medium [&::placeholder]:text-neutral-500 xl:w-[720px] xl:h-[134px] xl:[&::placeholder]:text-md ${
          error
            ? "border-[#d9206e] dark:border-[#d9206e]"
            : "border-[#dfdfdf] dark:border-neutral-800"
        }`}
      ></textarea>
      {error && <p className="text-xs text-[#d9206e] font-medium">{error}</p>}
    </div>
  );
};
