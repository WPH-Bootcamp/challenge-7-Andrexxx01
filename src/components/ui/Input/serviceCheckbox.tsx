export type ServicesCheckboxProps = {
  id: string;
  label: string;
  onChange: (id: string) => void;
};

export const ServicesCheckbox:React.FC<ServicesCheckboxProps> = ({
    id, label, onChange
}) => {
    return (
      <div className="w-full h-[28px] flex gap-[12px] items-center justify-start relative">
        <input
          type="checkbox"
          name="web-development"
          id={id}
          onChange={() => onChange(id)}
          className="peer appearance-none h-5 w-5 cursor-pointer rounded-[6px] border-[1px] border-[#dfdfdf] checked:bg-primary-200 checked:border-primary-200 transition duration-200 dark:border-neutral-800"
        />
        <img
          src="/check.svg"
          alt="checkmark"
          className="pointer-events-none absolute left-[3px] top-[6.5px] w-[14px] h-[14px] invert opacity-0 peer-checked:opacity-100 transition"
        />
        <label
          htmlFor={id}
          className="text-sm font-medium text-neutral-950 hover:text-purple-500 duration-500 cursor-pointer xl:text-md dark:text-neutral-25"
        >
          {label}
        </label>
      </div>
    );
}