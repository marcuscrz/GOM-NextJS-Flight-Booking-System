type ViewItemWithLabelProps = {
  label?: string;
  labelClassName?: string;
  value?: any;
  itemClassName?: string;
};

export const ViewItemWithLabel = ({
  label,
  labelClassName,
  value,
  itemClassName,
}: ViewItemWithLabelProps) => {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <p className={itemClassName}>{value}</p>
    </>
  );
};
