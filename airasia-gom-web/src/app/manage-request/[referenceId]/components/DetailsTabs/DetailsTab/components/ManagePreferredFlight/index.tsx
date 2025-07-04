import { IFlightPreferance } from "../../Types/Tabs";
import { format } from "date-fns";
import flightPreference from "@/app/test-data/flightPreferance.json";
import { FlightPreferenceComponent } from "@/app/components/FlightPreference";
import {
  IWarrantBookingInput,
  WarrantBookingCheckedFlightKey,
} from "@/app/new-booking/types/page";
interface IProps {
  flightDetails: IFlightPreferance;
  warentBookingInput: IWarrantBookingInput;
  handleCheckboxEvent: (input: React.ChangeEvent<any>) => void;
  

}

export const PerferredFlightComponent = ({
  flightDetails: data,
  warentBookingInput,
  handleCheckboxEvent,
}: IProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-red-600 font-bold bg">Flight Information</h1>
      <hr className="border-t-2 border-gray-300 mb-2 bg" />
      <div className="flex mb-2 gap-14">
        <div className=" w-1/2">
          <div className="w-full p-4 ">
            <h1 className="font-bold mb-2">Departing flights</h1>
            <div className="flex flex-col items-center">
              <div className="text-black font-bold text-sm flex items-center gap-4.5 ">
                <span>{data?.origin || "N/A"}</span>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/68/68380.png" // Air Plane taking off image
                  alt="arrow"
                  className="w-4 h-4 translate-y-[1px]"
                />

                <span>{data?.destination || "N/A"}</span>
              </div>
              <p className="text-xs text-grat-500 text-center mt-1 text-gray-700">
                {format(data.departureDate, "dd MMM yyyy")}
              </p>
            </div>
          </div>
          <div>
             <FlightPreferenceComponent
              flightPreferenceList={flightPreference?.departureSchedule}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.destinationShortName}
              warrantBookingInput={warentBookingInput}
              flightScheduleCheckKey={"departureFlightSchedules"}
              handleCheckboxEvent={handleCheckboxEvent}
            />
          </div>
        </div>
        <div className=" h-1/5 w-1/2">
          <div className="w-full p-4 ">
            <h1 className="font-bold mb-2">Departing flights</h1>
            <div className="flex flex-col items-center">
              <div className="text-black font-bold text-sm flex items-center gap-4.5 ">
                <span>{data?.origin || "N/A"}</span>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/68/68380.png" // Air Plane taking off image
                  alt="arrow"
                  className="w-4 h-4 translate-y-[1px]"
                />

                <span>{data?.destination || "N/A"}</span>
              </div>
              <p className="text-xs text-grat-500 text-center mt-1 text-gray-700">
                {format(data.departureDate, "dd MMM yyyy")}
              </p>
            </div>
          </div>
          <div className="overflow-clip">
             <FlightPreferenceComponent
              flightPreferenceList={flightPreference?.departureSchedule}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.destinationShortName}
              warrantBookingInput={warentBookingInput}
              flightScheduleCheckKey={"departureFlightSchedules"}
              handleCheckboxEvent={handleCheckboxEvent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerferredFlightComponent;
