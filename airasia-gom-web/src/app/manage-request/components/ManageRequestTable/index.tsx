'use client'
import { format, parse } from "date-fns";
import { useRouter } from "next/navigation";
import { IManageRequestData } from "../../types/page";

const table_css = {
  tbale_columns_css: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer",
  table_rows_css:"px-6 py-4 text-sm text-gray-500 cursor-pointer"
};

const RequestTable = ({ manageRequest: data }: {manageRequest: IManageRequestData[]}) => {
  const router = useRouter();

  const formatDate = (dateString: any) => {
    return format(dateString, "dd MMM yyyy");
  };


  return (
    <div className="overflow-x-auto">
      <p className="text-xs font-bold text-gray-400 mb-4">
        {data.length} Request Found{" "}
      </p>
      <table className="min-w-full divide-y divide-gray-200 border-2 border-gray-100">
        <thead className="bg-gray-50">
          <tr>
            <th className={table_css.tbale_columns_css}>
              Reference ID ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Origin ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Destination ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Flight Number ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Departure Date ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Trip Type ↓
            </th>
            <th className={table_css.tbale_columns_css}>
              Status ↓
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((request, index) => (
            <tr key={index} className="hover:bg-gray-100 " onClick={() => router.push(`/manage-request/${request.referenceId}`)}>
              <td className={table_css.table_rows_css}>
                {request.referenceId} 
              </td>
              <td className={table_css.table_rows_css}>
                {request.origin}
              </td>
              <td className={table_css.table_rows_css}>
                {request.destination}
              </td>
              <td className={table_css.table_rows_css}>
                {request.flightNumber}
              </td>
              <td className={table_css.table_rows_css}>
                {formatDate(request.departureDate)}
              </td>
              <td className={table_css.table_rows_css}>
                {request.tripType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm cursor-pointer">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    request.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : request.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {request.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
