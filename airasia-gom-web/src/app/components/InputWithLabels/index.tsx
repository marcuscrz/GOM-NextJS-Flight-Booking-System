type InputWithLabels = {
  label?: string;
  labelClassName?: string;
  inputName: string;
  inputType: string;
  value?: any;
  setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  inputClassName?: string;
  placeholder?: string;
};

export const InputWithLabels = ({
  label,
  labelClassName,
  inputName,
  inputType,
  value,
  setValue,
  inputClassName,
  placeholder,
}: InputWithLabels) => {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        type={inputType}
        name={inputName}
        value={value}
        onChange={(e) => setValue(e)}
        className={inputClassName}
        placeholder={placeholder}
      />
    </>
  );
};
