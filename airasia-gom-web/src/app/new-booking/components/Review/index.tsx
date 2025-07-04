import { ViewItemWithLabel } from "@/app/components/ItemViewWithLabel";
import OneWayIcon from "../../../assets/one-way.png";
import {
  IPassengers,
  IWarrantBookingInput,
  IWarrantBookingPassenger,
  WarrantBookingCheckedFlightKey,
} from "../../types/page";
import { format } from "date-fns";
import { FlightPreferenceComponent } from "@/app/components/FlightPreference";
import flightPreference from "@/app/test-data/flightPreferance.json";
import passengersData from "@/app/test-data/passenger.json";
import { travelAgencyList } from "@/app/test-data/newBookingOptions";
import OneWayImage from "../../../assets/one-way.png";
import Image from "next/image";
import DownArrowIcon from "../../../assets/down-arrow.png";

interface IReviewComponentProps {
  warrantBookingInput: IWarrantBookingInput;
}
export const RewviewComponent = ({
  warrantBookingInput,
}: IReviewComponentProps) => {
  const passengerValue = () => {
    let persons = "";
    if (warrantBookingInput.adult)
      persons += warrantBookingInput.adult + " Adults, ";
    if (warrantBookingInput.child)
      persons += warrantBookingInput.child + " Childs, ";
    if (warrantBookingInput.infant)
      persons += warrantBookingInput.infant + " Infant ";
    return persons;
  };

  const formatDate = (dateString?: string) => {
    if (dateString) {
      return format(dateString, "dd MMM yyyy");
    }
    return "";
  };

  const getFlightScheduleData = (
    flightScheduleKey: WarrantBookingCheckedFlightKey,
    flightPreferanceList: any
  ) => {
    const flightSchedulesIds = warrantBookingInput[flightScheduleKey];
    let flightData = flightPreferanceList.filter((flightPreference: any) =>
      flightSchedulesIds.includes(flightPreference.id)
    );
    return flightData;
  };

  const getTravelAgencies = () => {
    return travelAgencyList
      .filter((agency) => warrantBookingInput.travelAgency.includes(agency.id))
      .map((agency) => agency.name + ", ");
  };

  const getPassengerData = (passengerId: string) => {
    return passengersData.find(
      (passenger) => passenger.id === passengerId
    ) as IWarrantBookingPassenger;
  };

  return (
    <div className="m-4">
      <h1 className="text-red-600 font-bold mb-4">Review & Confirmation</h1>
      <div className="grid grid-cols-5 px-4">
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Trip type"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={warrantBookingInput.tripType}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>

        <div className="mb-2">
          <ViewItemWithLabel
            label={"Passenger"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={passengerValue()}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>

        <div className="mb-2">
          <ViewItemWithLabel
            label={"Cabin type"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={warrantBookingInput.cabinType}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 px-4">
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Origin"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={warrantBookingInput.origin}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Destination"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={warrantBookingInput.destination}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Departure date"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={formatDate(warrantBookingInput.departureDate)}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Return date"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={formatDate(warrantBookingInput.returnDate)}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 m-4">
        <div className="">
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
            <div className=" text-right">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-red-600 font-bold">Next day</span>
                <span className="text-gray-600 font-bold ml-2">{">"}</span>
              </div>
            </div>
          </div>
          <div className="mt-4  max-h-[400px] overflow-auto">
            <FlightPreferenceComponent
              flightPreferenceList={getFlightScheduleData(
                "departureFlightSchedules",
                flightPreference?.departureSchedule
              )}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.originShortName}
              warrantBookingInput={warrantBookingInput}
            />
          </div>
        </div>
        <div className="">
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
            <div className=" text-right">
              <div className="bg-gray-100  py-1 px-2">
                <span className="text-red-600 font-bold">Next day</span>
                <span className="text-gray-600 font-bold ml-2">{">"}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 max-h-[400px] overflow-auto">
            <FlightPreferenceComponent
              flightPreferenceList={getFlightScheduleData(
                "returnFlightSchedules",
                flightPreference?.returnSchedule
              )}
              destinationShortName={flightPreference.originShortName}
              originShortName={flightPreference.originShortName}
              warrantBookingInput={warrantBookingInput}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 ">
        <p className="text-red-600 font-bold  border-b-1 border-gray-300 ">
          Ancillary Details
        </p>
        <div className="grid grid-cols-2 justify-between w-[100%] gap-10 mt-4">
          <div className="">
            <div className="flex">
              <Image
                src={OneWayIcon}
                alt="One Way"
                width={16}
                height={16}
                className="h-5 w-5"
              />
              <h3 className="text-red-600 font-bold mb-4 ml-2">
                Onward preference
              </h3>
            </div>
            <div className="grid grid-cols-2  gap-5">
              <div className="mb-2">
                <ViewItemWithLabel
                  label={"Baggage"}
                  labelClassName={"text-xs font-medium text-gray-500"}
                  value={warrantBookingInput.departureBaggage + " KG"}
                  itemClassName={"text-sm font-bold text-gray-700"}
                />
              </div>
              <div className="mb-2">
                <ViewItemWithLabel
                  label={"Sport Equipment"}
                  labelClassName={"text-xs font-medium text-gray-500"}
                  value={warrantBookingInput.departureEquipment + " KG"}
                  itemClassName={"text-sm font-bold text-gray-700"}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex">
              <Image
                src={OneWayIcon}
                alt="One Way"
                width={16}
                height={16}
                className="h-5 w-5"
              />
              <h3 className="text-red-600 font-bold mb-4 ml-2">
                Return preference
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <ViewItemWithLabel
                  label={"Baggage"}
                  labelClassName={"text-xs font-medium text-gray-500"}
                  value={warrantBookingInput.returnBaggage + " KG"}
                  itemClassName={"text-sm font-bold text-gray-700"}
                />
              </div>
              <div>
                <ViewItemWithLabel
                  label={"Sport Equipment"}
                  labelClassName={"text-xs font-medium text-gray-500"}
                  value={warrantBookingInput.returnEquipment + " KG"}
                  itemClassName={"text-sm font-bold text-gray-700"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <p className="text-red-600 font-bold  border-b-1 border-gray-300 ">
          Passenger Information
        </p>
        <p className="text-sm font-bold text-gray-700 mt-4">
          <b>Total: </b>
          {passengerValue()}
        </p>
        <div>
          {warrantBookingInput.passengers.map((passenger: IPassengers) => {
            const passengerData: IWarrantBookingPassenger = getPassengerData(
              passenger.id
            );
            return (
              <div
                key={passengerData.id}
                className="py-2 gap-5 md:gap-10 bg-gray-100 rounded p-4 mt-5 cursor-pointer"
              >
                <div className="flex justify-between">
                  <p className="w-[35%] text-left font-bold text-sm">
                    {passengerData.name}
                  </p>
                  <p className="flex-1 text-gray-400 text-sm">
                    {passengerData.email}
                  </p>
                  <p className="flex-1 text-gray-400 text-sm">
                    {passengerData.userId}
                  </p>
                  <Image
                    src={DownArrowIcon}
                    alt="bottom arrow"
                    width={10}
                    height={10}
                    className="h-4 w-4"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-left font-bold text-sm border-b-1 border-b-gray-300 mb-2">
                    Family Members
                  </p>
                  <div className="grid grid-cols-2">
                    {passenger.familyMembers.map((memberId: string) => {
                      const passengerName = passengersData.find(
                        (p) => p.id === memberId
                      )?.name;
                      return (
                        <p className="font-medium text-sm pb-2" key={memberId}>
                          {passengerName}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-6 ">
        <p className="text-red-600 font-bold  border-b-1 border-gray-300 ">
          Additional Information
        </p>
        <div></div>
        <div className="grid grid-cols-5 mt-4">
          <div className="mb-2">
            <ViewItemWithLabel
              label={"Pukal Number"}
              labelClassName={"text-xs font-medium text-gray-500"}
              value={warrantBookingInput.pukalNumber}
              itemClassName={"text-sm font-bold text-gray-700"}
            />
          </div>
          <div className="mb-2">
            <ViewItemWithLabel
              label={"Object Number"}
              labelClassName={"text-xs font-medium text-gray-500"}
              value={warrantBookingInput.objectNumber}
              itemClassName={"text-sm font-bold text-gray-700"}
            />
          </div>
          <div className="mb-2">
            <ViewItemWithLabel
              label={"Travel Agencies"}
              labelClassName={"text-xs font-medium text-gray-500"}
              value={getTravelAgencies()}
              itemClassName={"text-sm font-bold text-gray-700"}
            />
          </div>
        </div>
        <div className="mb-2">
          <ViewItemWithLabel
            label={"Remarks"}
            labelClassName={"text-xs font-medium text-gray-500"}
            value={warrantBookingInput.remarks}
            itemClassName={"text-sm font-bold text-gray-700"}
          />
        </div>
        <div className="mb-2">
          <p className="text-sm font-bold text-gray-700">
            <b className="font-extrabold">Expected Fare/Tax included: </b>
            {"MYR" + warrantBookingInput.expectedFare}
          </p>
        </div>
      </div>
    </div>
  );
};
