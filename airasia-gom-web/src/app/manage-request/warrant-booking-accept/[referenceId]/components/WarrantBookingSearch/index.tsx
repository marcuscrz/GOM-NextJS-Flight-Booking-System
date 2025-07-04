import BookingTripButtonComponent from "@/app/new-booking/components/BookingTripButton";
import { InputWithLabels } from "@/app/components/InputWithLabels";
import { DateInputWithLabels } from "@/app/components/DateInputWithLabel";
// import { IWarrantBookingInput } from "@/app/new-booking/types/page";
import { IWarrantBookingDetails } from "../../../types/type";
import { DropdownInputWithLabels } from "@/app/components/DropdownInputWithlabel";
import { cabinTypeOptions } from "@/app/test-data/newBookingOptions";
import Image from "next/image";
import SwapIcon from "../../../../../assets/swap-icon.png";

type IWarrantBookingSearchComponentProps = {
  warrantBookingInput: IWarrantBookingDetails;
  setWarrantBookingInput: (input: IWarrantBookingDetails) => void;
  tripButton: string;
  setTripButton: (input: string) => void;
  handleValue: (
    input: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleFieldChange: (key: string, value: string) => void;
};

const WarrantBookingSearchComponent = ({
  warrantBookingInput,
  tripButton,
  setTripButton,
  handleValue,
  handleFieldChange,
}: IWarrantBookingSearchComponentProps) => {
  

  return (
    <div>
      <BookingTripButtonComponent
        tripButton={tripButton}
        setTripButton={setTripButton}
      />

      <div className="flex mt-4 gap-3">
        <div className="flex w-[30%] ">
          <div className="w-[47.5%]">
            <InputWithLabels
              label={"Origin"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"origin"}
              inputType={"text"}
              value={warrantBookingInput.origin}
              setValue={handleValue}
              inputClassName={
                "w-full h-[40px] p-4 border border-gray-300 rounded-md"
              }
              placeholder={"City/Airport..."}
            />
          </div>
          
          <div className="w-[47.5%] ml-[16px]">
            <InputWithLabels
              label={"Destination"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"destination"}
              inputType={"text"}
              value={warrantBookingInput.destination}
              setValue={handleValue}
              inputClassName={
                "w-full h-[40px] p-4 border border-gray-300 rounded-md"
              }
              placeholder={"City/Airport..."}
            />
          </div>
        </div>

        <div className="flex w-[28%]">
          <div className="w-[50%]">
            <DateInputWithLabels
              label={"Departure Date"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"departureDate"}
              value={warrantBookingInput.departureDate}
              setValue={handleFieldChange}
              dateFieldClassName={
                "w-full h-[40px] p-1 border border-gray-300 rounded-md"
              }
              placeholder={""}
            />
          </div>
          <div className="flex-1 w-[25%]">
            <DateInputWithLabels
              label={"Return Date"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"returnDate"}
              value={warrantBookingInput.returnDate}
              setValue={handleFieldChange}
              dateFieldClassName={
                "w-full h-[40px] p-1 border border-gray-300 rounded-md"
              }
              placeholder={""}
            />
          </div>
        </div>

        <div className="w-[15%]">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500">
              No of People
            </label>
            <select
              name="noOfPeople"
              value={warrantBookingInput.adult + "Adult"}
              onChange={(e) => console.log(e)}
              className="w-full h-[40px] p-2 border border-gray-300 rounded-md"
            >
              <option value="">6 Adults</option>
              <option value="1 Adults">1 Adults</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
            </select>
          </div>
        </div>

        <div className="w-[13%]">
          <div className="flex-1 min-w-[25%]">
            <DropdownInputWithLabels
              label={"Cabin Type"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"cabinType"}
              options={cabinTypeOptions}
              value={warrantBookingInput.cabinType}
              setValue={handleValue}
              inputClassName={"w-full p-2 border border-gray-300 rounded-md"}
            />
          </div>
        </div>

        <div className="w-[9%] mt-3">
          <button
            type="submit"
            className="px-3 py-2 bg-green-500 border-2 w-[100%] border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarrantBookingSearchComponent;
