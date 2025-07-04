import Image from "next/image";
import { IWarrantBookingInput } from "../../types/page";
import OneWayImage from "../../../assets/one-way.png";
import { format } from "date-fns";
import flightPreference from "@/app/test-data/flightPreferance.json";
import { FlightPreferenceComponent } from "@/app/components/FlightPreference";

type FlightPreferenceListComponentProps = {
  warrantBookingInput: IWarrantBookingInput;
  handleInputChange: (
    input: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleFieldChange: (key: string, value: string) => void;
  handleCheckboxEvent: (input: React.ChangeEvent<any>) => void;
};
export const FlightPreferenceListComponent = ({
  handleInputChange,
  warrantBookingInput,
  handleCheckboxEvent,
}: FlightPreferenceListComponentProps) => {
  return (
    <>
      <div className="flex w-[100%] gap-10 m-4">
        <div className="flex-1 w-[50%]">
          <h1 className="text-gray-600 font-bold">Departing flights</h1>
          <div className="text-center">
            <div className="flex justify-center mt-4">
              <p className="text-gray-600 font-bold w-[45%] text-right">
                {warrantBookingInput?.origin}
              </p>
              <Image
                src={OneWayImage}
                alt="One way image"
                width={16}
                height={16}
                className="h-5 w-5 mx-4"
              />
              <p className="text-gray-600 font-bold  w-[45%] text-left">
                {warrantBookingInput?.destination}
              </p>
            </div>
            <p className="text-sm text-gray-400  font-bold">
              {warrantBookingInput?.departureDate &&
                format(warrantBookingInput?.departureDate, "dd MMM yyyy")}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <div className="">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-gray-600 font-bold mr-2">{"<"}</span>
                <span className="text-red-600 font-bold">Previous day</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 font-light">
                Total of fight available:{" "}
                {flightPreference.departureSchedule.length}
              </p>
              <p className="text-sm text-gray-600 font-bold">
                SelectedFlight:{" "}
                {warrantBookingInput.departureFlightSchedules.length}
              </p>
            </div>
            <div className=" text-right">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-red-600 font-bold">Next day</span>
                <span className="text-gray-600 font-bold ml-2">{">"}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 h-[400px] overflow-auto">
            <FlightPreferenceComponent
              flightPreferenceList={flightPreference?.departureSchedule}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.destinationShortName}
              warrantBookingInput={warrantBookingInput}
              flightScheduleCheckKey={"departureFlightSchedules"}
              handleCheckboxEvent={handleCheckboxEvent}
              isEditable={true}
            />
          </div>
        </div>
        <div className="flex-1 w-[50%]">
          <h1 className="text-gray-600 font-bold">Returning flights</h1>
          <div className="text-center">
            <div className="flex justify-center mt-4">
              <p className="text-gray-600 font-bold w-[45%] text-right">
                {warrantBookingInput?.origin}
              </p>
              <Image
                src={OneWayImage}
                alt="One way image"
                width={16}
                height={16}
                className="h-5 w-5 mx-4"
              />
              <p className="text-gray-600 font-bold  w-[45%] text-left">
                {warrantBookingInput?.destination}
              </p>
            </div>
            <p className="text-sm text-gray-400  font-bold">
              {warrantBookingInput?.departureDate &&
                format(warrantBookingInput?.departureDate, "dd MMM yyyy")}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <div className="">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-gray-600 font-bold mr-2">{"<"}</span>
                <span className="text-red-600 font-bold">Previous day</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 font-light">
                Total of fight available:{" "}
                {flightPreference.departureSchedule.length}
              </p>
              <p className="text-sm text-gray-600 font-bold">
                SelectedFlight:{" "}
                {warrantBookingInput.returnFlightSchedules.length}
              </p>
            </div>
            <div className=" text-right">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-red-600 font-bold">Next day</span>
                <span className="text-gray-600 font-bold ml-2">{">"}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 h-[400px] overflow-auto">
            <FlightPreferenceComponent
              flightPreferenceList={flightPreference?.returnSchedule}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.destinationShortName}
              warrantBookingInput={warrantBookingInput}
              flightScheduleCheckKey={"returnFlightSchedules"}
              handleCheckboxEvent={handleCheckboxEvent}
              isEditable={true}
            />
          </div>
        </div>
      </div>
      <div className="ml-4 w-[100%] mt-10">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={warrantBookingInput.isFlexibaleWithDates}
            value={warrantBookingInput.isFlexibaleWithDates ? 1 : 0}
            name="isFlexibaleWithDates"
            onChange={(e) => handleInputChange(e)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Flexible on Dates
          </span>
        </label>
        <p className="text-sm text-gray-500 font-light">Remarks</p>
        <textarea
          rows={5}
          className="mb-4 w-[100%] rounded border-1 border-gray-400 "
          defaultValue={warrantBookingInput.remarks}
          name="remarks"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
};
