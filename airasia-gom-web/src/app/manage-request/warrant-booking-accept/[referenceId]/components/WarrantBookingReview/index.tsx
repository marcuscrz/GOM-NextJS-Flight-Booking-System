import { IManageRequestData } from "@/app/manage-request/types/page";
import { IFareDetails, IWarrantBookingDetails } from "../../../types/type";
import WarrantReviewDepartFlightDetailsComponent from "./components/WarrantReviewDepartFlightDetails";
import WarrantReviewArrivalFlightDetailsComponent from "./components/WarrantReviewArrivalFlightDetails";
import FareSummaryComponent from "@/app/components/FareSummary";
import Image from "next/image";

import ExternalLinkIcon from "../../../../../assets/external-link-icon.png"

export interface IProps {
  requestDetails: IManageRequestData;
  warrantDetails: IWarrantBookingDetails;
  fareDetails: IFareDetails;
}

const WarrantBookingReviewComponent = ({requestDetails, warrantDetails, fareDetails}: IProps) => {

  return (
    <div className="mt-5">
      <div className="py-2">
        <span>Reference ID: </span>
        <span className="font-bold">
          {requestDetails.referenceId !== undefined ? requestDetails.referenceId : "N/A"}
        </span>
      </div>

      <div className="py-2">
        <span>Requestor: </span>
        <span className="font-bold">
          {requestDetails.requestor}
        </span>
      </div>

      <h1 className="py-5 text-xl text-red-600 font-semibold mt-5">Flight Summary</h1>
      
      <div className="flex">
        <div className="w-[65%]">
          <WarrantReviewDepartFlightDetailsComponent warrantDetails={warrantDetails} />
          <WarrantReviewArrivalFlightDetailsComponent warrantDetails={warrantDetails} />
        </div>
        <div className="w-[30%] ml-auto">
          <FareSummaryComponent fareDetails={fareDetails} showToggle={false}/>
          <button className="flex cursor-pointer">
            <h1 className="ml-5 text-xs text-red-600 mt-3">Show booking fare details</h1>
            <span>
              <Image
                src={ExternalLinkIcon}
                alt="External Link Icon"
                className="h-[20px] w-[20px] ml-1 mt-2"
              />
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default WarrantBookingReviewComponent;