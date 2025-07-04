import Image from "next/image";
import { IWarrantBookingDetails } from "@/app/manage-request/warrant-booking-accept/types/type";
import format from "date-fns/format";

import planeImage from "../../../../../../../assets/one-way.png";

export interface IWarrantReviewArrivalFlightDetailsComponentProps {
  warrantDetails: IWarrantBookingDetails;
}

const WarrantReviewArrivalFlightDetailsComponent = ({warrantDetails}: IWarrantReviewArrivalFlightDetailsComponentProps) => {
    const formatDate = (dateString: string) => {
      return format(dateString, "dd MMMM yyyy");
    };
  
  return (
    <div className="bg-white px-2 py-6 flex mt-6 shadow-md">

      <div className="flex mt-auto mb-auto">
        <Image src={planeImage} alt="plane" className="h-10 w-10" />
        <div className="px-1">
          <h1 className="text-gray-400 text-sm">Return date</h1>
          <h1 className="font-bold">{formatDate(warrantDetails.returnDate)}</h1>
        </div>
      </div>

      <div className="ml-18">
        <div className="flex gap-3 py-0.5">
          <span>{warrantDetails.destination}</span>
          <span>→</span>
          <span>{warrantDetails.origin}</span>
        </div>
        <div className="text-sm text-gray-400 py-0.5">
          <span>{warrantDetails.planeNumber} | </span>
          <span>{warrantDetails.returnDepartureTime}-{warrantDetails.returnArrivalTime} | </span>
          <span>Non-stop </span>
        </div>
      </div>
    </div>
  );
}

export default WarrantReviewArrivalFlightDetailsComponent;