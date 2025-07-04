import { IManageRequestData } from "@/app/manage-request/types/page";
import { parse, format } from "date-fns";
import FlightInformationDetailsComponent from "./components/ManageFlightInformation";
import AncillaryInformationComponent from "./components/ManageAncillary";
import ManageAdditionalInformationComponent from "./components/ManageAdditionalInfo";
import PerferredFlightComponent from "./components/ManagePreferredFlight";
import { IFlightPreferance } from "./Types/Tabs";
import flightPreferenceData from "../../../../../test-data/flightPreferance.json"
import ManageAcceptRejectButtonComponent from "./components/ManageAcceptRejectBtn";
import { WarrantBookingCheckedFlightKey, IWarrantBookingInput } from "@/app/new-booking/types/page";
import manageRequestData from "../../../../../test-data/manageRequest.json";
interface IProps {
  requestDetails: IManageRequestData;
  flightDetails: IFlightPreferance;
  handleCheckboxEvent: (input: React.ChangeEvent<any>) => void;
   warrantBookingInput: IWarrantBookingInput;
}


const RequestDetailsTabComponent = ({
  requestDetails: data,
  flightDetails,
  handleCheckboxEvent,
  warrantBookingInput,
}: IProps) => {
  return (
    <div>
      <div className="py-3 px-4 w-[100%] border-1 border-gray-300">
        <FlightInformationDetailsComponent requestDetails={data} />
        <AncillaryInformationComponent requestDetails={data} />
        <ManageAdditionalInformationComponent requestDetails={data} />
        <PerferredFlightComponent
          flightDetails={flightDetails}
          warentBookingInput={warrantBookingInput}
          handleCheckboxEvent={handleCheckboxEvent}
        />
      </div>
      {data?.referenceId && (
        <ManageAcceptRejectButtonComponent referenceId={data.referenceId} />
      )}
    </div>  
  );
};

export default RequestDetailsTabComponent;
