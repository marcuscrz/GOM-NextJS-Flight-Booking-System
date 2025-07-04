import ManagePassengerTable from "./components/ManagePassengerTable";
import passengers from "../../../../../test-data/passengerInfo.json";
import { IManageRequestData } from "@/app/manage-request/types/page";

interface IProps {
  requestDetails: IManageRequestData;
}

const RequestPassengersTabComponent = ({ requestDetails }: IProps) => {

  console.log("Loaded passengers:", passengers);

  return (
    <div className="py-3 px-4 w-[100%] border-1 border-gray-300">
      <div className="flex">
        <h1 className="text-black font-bold mb-4">Total Passengers: </h1>
        <p className="ml-2">{requestDetails.totalPassenger} {requestDetails.passengerType}</p>
      </div>
      

      <ManagePassengerTable passengers={passengers} />
    </div>
  );
};

export default RequestPassengersTabComponent;
