import { IManageRequestData } from "@/app/manage-request/types/page";
import { format } from "date-fns";

interface Props {
  requestDetails: IManageRequestData;
}
const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "dd MMMM yyyy, HH:mm");
};

const QuotationInfoComponent = ({ requestDetails: data }: Props) => {
  return (
    <div className="flex h-[100px] w-[815px] text-gray-400">
      <div className="w-[271.66px] h-full">
        <p className="text-sm">Reference ID</p>
        <h2 className="text-black font-bold mb-3">
          {data?.referenceId || "N/A"}
        </h2>
        <p className="text-sm">Requestor</p>
        <h2 className="text-black font-bold mb-3">
          {(data?.requestor || "N/A").toUpperCase()}
        </h2>
      </div>
      <div className="w-[271.66px] h-full">
        <p className="text-sm">Booking Status</p>
        <h2 className="text-red-600 font-bold mb-3">
          {(data?.bookingStatus || "N/A").toUpperCase()}
        </h2>
        <p className="text-sm">Date Requested</p>
        <h2 className="text-black font-bold mb-3">
          {data?.dateRequested ? formatDateTime(data.dateRequested) : "N/A"}
        </h2>
      </div>
      <div className="w-[271.66px] h-full">
        <p className="text-sm">Warrant Status</p>
        <h2 className="text-green-600 font-bold mb-3">
          {(data?.warrantStatus || "N/A").toUpperCase()}
        </h2>
        <p className="text-sm">Request Status</p>
        <span
          className={`font-bold mb-3 ${
            data.status === "Approved"
              ? "text-green-600"
              : data.status === "Pending"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {(data.status || "N/A").toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default QuotationInfoComponent;
