type BreadcrumbsComponentProps = {
  items: any[];
  activeId: number;
};
export const BreadcrumbsComponent = ({
  items,
  activeId,
}: BreadcrumbsComponentProps) => {
  return (
    <div className="flex">
      {items?.map((item: any) => (
        <h1
          key={item.id}
          className={`flex ${
            item.id === activeId ? "text-red-600" : "text-gray-600"
          } font-bold mb-4`}
        >
          {item.title}
          {item.id !== items.length && <p className="px-2"> {">"} </p>}
        </h1>
      ))}
    </div>
  );
};
