import Image from "next/image";
import OneWayImage from "../../assets/one-way.png";
import {
  IWarrantBookingInput,
  WarrantBookingCheckedFlightKey,
} from "@/app/new-booking/types/page";


type FlightPreferenceComponentProps = {
  handleCheckboxEvent?: (input: React.ChangeEvent<any>) => void;
  flightPreferenceList: any;
  originShortName: string;
  destinationShortName: string;
  warrantBookingInput?: IWarrantBookingInput;
  flightScheduleCheckKey?: WarrantBookingCheckedFlightKey;
  isEditable?: boolean;
};

export const FlightPreferenceComponent = ({
  flightPreferenceList,
  originShortName,
  destinationShortName,
  warrantBookingInput,
  flightScheduleCheckKey,
  handleCheckboxEvent,
  isEditable= false,
}: FlightPreferenceComponentProps) => {
  const checkedFlightScheduleHandler = (flightData: any) => {
    return flightScheduleCheckKey && (warrantBookingInput as IWarrantBookingInput)[
      flightScheduleCheckKey
    ].includes(flightData.id);
  };

  return (
    <>
      {flightPreferenceList?.map((flightData: any) => {
        return (
          <div className="border-1 border-gray-400 rounded p-4 mb-4" key={flightData.id}>
            <p className="text-sm text-gray-600 font-light mb-2">
              {flightData.flightName} ({flightData.model})
            </p>
            <div className="flex justify-between gap-4 items-center">
              <div>
                <p className="text-md text-gray-800 font-bold">
                  {flightData.departureTime}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {originShortName}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold text-gray-400 ">-</p>
                <Image
                  src={OneWayImage}
                  alt="One way image"
                  width={16}
                  height={16}
                  className="h-5 w-5 mx-2"
                />
                <p className="font-bold text-gray-400 ">-</p>
              </div>
              <div>
                <p className="text-md text-gray-800 font-bold">
                  {flightData.arrivalTime}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {destinationShortName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-light mx-6">
                  {flightData.duration}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-light">
                  {flightData.stop} stop ({flightData.transitTime} at{" "}
                  {flightData.transitLocation})
                </p>
              </div>
              {isEditable && <div>
                <input
                  type="checkbox"
                  name={flightScheduleCheckKey}
                  checked={isEditable && checkedFlightScheduleHandler(flightData)}
                  className=" h-4 w-4 cursor-pointer"
                  onChange={(e) => handleCheckboxEvent && handleCheckboxEvent(e)}
                  id={flightScheduleCheckKey}
                  value={flightData.id}
                />
              </div>}
            </div>
          </div>
        );
      })}
    </>
  );
};
