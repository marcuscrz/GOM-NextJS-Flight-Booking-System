import { IWarrantBookingDetails } from "../../../types/type";
import Image from "next/image";

import BigLuggageIcon from "../../../../../assets/big-luggage-icon.png";
import SmallLuggageIcon from "../../../../../assets/small-luggage-icon.png";
import EditIcon from "../../../../../assets/edit-icon.png";
import GrayDots from "../../../../../assets/gray-dots.png"

interface IWarrantBookingDepartDetailsComponentProps {
  warrantBookingInput: IWarrantBookingDetails;
}

const WarrantBookingDepartDetailsComponent = ({
  warrantBookingInput,
}: IWarrantBookingDepartDetailsComponentProps) => {
  return (
    <div className="border-[1.5px] rounded-[4px] p-3 shadow-md">
      <div className="w-full flex text-sm">
        <div>
          <h1>{warrantBookingInput.cabinType}</h1>
          <h1 className="text-gray-400">{warrantBookingInput.planeModel} {warrantBookingInput.planeNumber}</h1>
        </div>
        <span className="ml-auto bg-red-500 text-white text-xs h-6 rounded-[4px] p-1">
          Preferred
        </span>
      </div>

      <div className="w-full  py-3 text-sm flex">
        <div className=" h-full w-[20%] flex gap-7 ">
          <div>
            <h1 className="text-base">{warrantBookingInput.departDepartureTime}</h1>
            <h1 className="text-gray-400 font-semibold">{warrantBookingInput.originShortName}</h1>
          </div>

          <div>
            <Image
              src={GrayDots}
              alt="Small luggage icon"
              className="h-[40px] w-auto mr-0.5"
            />
          </div>

          <div>
            <h1 className="text-base">{warrantBookingInput.departArrivalTime}</h1>
            <h1 className="text-gray-400 font-semibold">{warrantBookingInput.destinationShortName}</h1>
          </div>
          
        </div>

        <div className="mt-auto mb-auto ml-22 text-gray-400 font-semibold">
          {warrantBookingInput.departTravelTime}
        </div>

        <div className="mt-auto mb-auto ml-18 text-gray-400 font-semibold">
          <span>Non-stop</span>
        </div>

        <div className="ml-auto">
          <div>
            <span className="text-sm">{warrantBookingInput.currency}</span>
            <span className="text-lg font-bold">{warrantBookingInput.expectedFare}</span>
          </div>
          <div className="flex">
            <span className="text-gray-400 ml-auto">/2 guest</span>
          </div>
        </div>
      </div>

      <hr className="py-1.5 border-gray-300 w-[75%] border-t-2" />

      <div className="flex w-full gap-10">
        <div className="flex text-gray-400">
          <Image
            src={SmallLuggageIcon}
            alt="Small luggage icon"
            className="h-[23px] w-auto mr-0.5"
          />
          {warrantBookingInput.departureEquipment}kg
        </div>

        <div className="flex text-gray-400">
          <Image
            src={BigLuggageIcon}
            alt="Big luggage icon"
            className="h-[23px] w-auto mr-0.5"
          />
          {warrantBookingInput.departureBaggage}kg
        </div>

        <span className="text-gray-400">per guest</span>

        <div className="ml-auto">
          <button className="flex px-1 cursor-pointer">
            <Image
              src={EditIcon}
              alt="Edit Icon"
              className="h-[20px] w-auto mr-1"
            />
            <span className="text-blue-950 text-[15px]">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarrantBookingDepartDetailsComponent;
