type DateInputWithLabelsProps = {
  label?: string;
  labelClassName?: string;
  inputName: string;
  value?: string | number;
  setValue: (key: string, value: string) => void;
  dateFieldClassName?: string;
  placeholder?: string;
};

export const DateInputWithLabels = ({
  label,
  labelClassName,
  inputName,
  value,
  setValue,
  dateFieldClassName,
  placeholder,
}: DateInputWithLabelsProps) => {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        type="date"
        name={inputName}
        value={value ? new Date(value).toISOString().split("T")[0] : ""}
        onChange={(e) => {
          setValue(inputName, new Date(e.target.value).toISOString());
        }}
        className={dateFieldClassName}
        placeholder={placeholder}
      />
    </>
  );
};
