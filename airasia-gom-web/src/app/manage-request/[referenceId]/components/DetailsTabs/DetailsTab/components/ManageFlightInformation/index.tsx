import { IManageRequestData } from "@/app/manage-request/types/page";
import { parse, format } from "date-fns";

interface IProps {
  requestDetails: IManageRequestData;
}

const FlightInformationDetailsComponent = ({
  requestDetails: data,
}: IProps) => {
  const formatDate = (dateString: string) => {
    return format(dateString, "dd MMM yyyy");
  };

  return (
    <div className="mb-6">
      <h1 className="text-red-600 font-bold">Flight Information</h1>
      <hr className="border-t-2 border-gray-300 mb-2" />

      <div className="flex h-[100px] w-[900px] text-gray-400 mb-2 gap-14">
        <div className=" h-full w-1/4">
          <p className="text-sm">Trip type</p>
          <h2 className="text-black text-[15px] mb-3">
            {data?.tripType || "N/A"}
          </h2>
          <p className="text-sm">Origin</p>
          <h2 className="text-black text-[15px] mb-3">
            {data?.origin || "N/A"}
          </h2>
        </div>
        <div className=" h-full w-1/4">
          <p className="text-sm">Passenger</p>
          <h2 className="text-black text-[15px] mb-3">
            {data.totalPassenger || "N/A"} {data?.passengerType || "N/A"}
          </h2>
          <p className="text-sm">Destination</p>
          <h2 className="text-black text-[15px] mb-3">
            {data?.destination || "N/A"}
          </h2>
        </div>
        <div className=" h-full w-1/4">
          <p className="text-sm">Cabin type</p>
          <h2 className="text-black text-[15px] mb-3">
            {data.cabinType || "N/A"}
          </h2>
          <p className="text-sm">Departure date</p>
          <h2 className="text-black text-[15px] mb-3">
            {data?.departureDate ? formatDate(data.departureDate) : "N/A"}
          </h2>
        </div>
        <div className="0 h-[50px] w-1/4 mt-[54px]">
          <p className="text-sm">Return date</p>
          <h2 className="text-black text-[15px] mb-3">
            {data?.returnDate ? formatDate(data.returnDate) : "N/A"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FlightInformationDetailsComponent;
