type optionProperty = {
  label: string;
  value: any;
};

type DropdownInputWithLabels = {
  label?: string;
  labelClassName?: string;
  inputName: string;
  options: optionProperty[];
  value?: any;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  inputClassName?: string;
  placeholder?: string;
};

export const DropdownInputWithLabels = ({
  label,
  labelClassName,
  inputName,
  options,
  value,
  setValue,
  inputClassName,
}: DropdownInputWithLabels) => {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <select
        name={inputName}
        value={value}
        className={inputClassName}
        onChange={(e) => setValue(e)}
      >
        {options?.map((option: optionProperty) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
