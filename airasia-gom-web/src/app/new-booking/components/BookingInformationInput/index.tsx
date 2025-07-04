import Image from "next/image";
import OneWayIcon from "../../../assets/one-way.png";
import DownArrowIcon from "../../../assets/down-arrow.png";

import { IWarrantBookingInput } from "../../types/page";
import { DateInputWithLabels } from "@/app/components/DateInputWithLabel";
import { InputWithLabels } from "@/app/components/InputWithLabels";
import { DropdownInputWithLabels } from "@/app/components/DropdownInputWithlabel";
import {
  baggageOptions,
  cabinTypeOptions,
  currencyOptions,
  travelAgencyList,
} from "@/app/test-data/newBookingOptions";

type BookingInformationInputComponentProps = {
  warrantBookingInput: IWarrantBookingInput;
  handleInputChange: (input: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFieldChange: (key: string, value: string) => void;
  handleCheckboxEvent: (input: React.ChangeEvent<any>) => void
};

const BookingInformationInputComponent = ({
  warrantBookingInput,
  handleInputChange,
  handleFieldChange,
  handleCheckboxEvent,
}: BookingInformationInputComponentProps) => {
 
  return (
    <>
      <div>
        <div className="flex items-end mb-6 mt-4">
          <div className="flex-1 mr-10 w-[25%]">
            <InputWithLabels
              label={"Origin"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"origin"}
              inputType={"text"}
              value={warrantBookingInput.origin}
              setValue={handleInputChange}
              inputClassName={
                "w-full  h-[35px] p-2 border border-gray-300 rounded-md"
              }
              placeholder={"City/Airport..."}
            />
          </div>

          <div className="flex-1 mr-10 w-[25%]">
            <InputWithLabels
              label={"Destination"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"destination"}
              inputType={"text"}
              value={warrantBookingInput.destination}
              setValue={handleInputChange}
              inputClassName={
                "w-full  h-[35px] p-2 border border-gray-300 rounded-md"
              }
              placeholder={"City/Airport..."}
            />
          </div>
          <div className="flex-1 w-[25%]">
            <DateInputWithLabels
              label={"Departure Date"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"departureDate"}
              value={warrantBookingInput.departureDate}
              setValue={handleFieldChange}
              dateFieldClassName={
                "w-full p-1 border border-gray-300 rounded-md"
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
                "w-full  p-1 border border-gray-300 rounded-md"
              }
              placeholder={""}
            />
          </div>
        </div>
        <div className="flex justify-between items-end w-[100%] gap-2 mb-6">
          <div className="flex-1 w-[25%] ">
            <label className="block text-sm font-medium text-gray-500">
              No of People
            </label>
            <select
              name="noOfPeople"
              value={warrantBookingInput.adult + "Adult"}
              onChange={(e) => console.log(e)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">6 Adults</option>
              <option value="1 Adults">1 Adults</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
            </select>
          </div>
          <div className="flex-1 min-w-[25%] max-w-[200px] ">
            <DropdownInputWithLabels
              label={"Cabin Type"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"cabinType"}
              options={cabinTypeOptions}
              value={warrantBookingInput.cabinType}
              setValue={handleInputChange}
              inputClassName={"w-full p-2 border border-gray-300 rounded-md"}
            />
          </div>
          <div className="flex-1 min-w-[25%] max-w-[200px ]">
            <DropdownInputWithLabels
              label={"Currency"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"currency"}
              options={currencyOptions}
              value={warrantBookingInput.currency}
              setValue={handleInputChange}
              inputClassName={"w-full p-2 border border-gray-300 rounded-md"}
            />
          </div>
          <div className="flex-1 min-w-[25%] max-w-[250px]">
            <InputWithLabels
              label={"Expected fare / pax (taxes included)*"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"expectedFare"}
              inputType={"number"}
              value={warrantBookingInput.expectedFare}
              setValue={handleInputChange}
              inputClassName={
                "w-full  h-[35px] p-2 border border-gray-300 rounded-md"
              }
              placeholder={"input fare..."}
            />
          </div>
        </div>
        <div className="flex w-[50%] justify-between gap-2 mb-6">
          <div className="flex-1 mr-10 w-[25%]">
            <InputWithLabels
              label={"Pukal Number"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"pukalNumber"}
              inputType={"number"}
              value={warrantBookingInput.pukalNumber}
              setValue={handleInputChange}
              inputClassName={
                "w-full  h-[35px] p-2 border border-gray-300 rounded-md"
              }
              placeholder={"input pukal number..."}
            />
          </div>

          <div className="flex-1 w-[25%]">
            <InputWithLabels
              label={"Object Number"}
              labelClassName={"block text-sm font-medium text-gray-500"}
              inputName={"objectNumber"}
              inputType={"number"}
              value={warrantBookingInput.objectNumber}
              setValue={handleInputChange}
              inputClassName={
                "w-full  h-[35px] p-2 border border-gray-300 rounded-md"
              }
              placeholder={"input object number..."}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] p-2 flex justify-between bg-gray-100">
          <p>Ancillary</p>
          <Image
            src={DownArrowIcon}
            alt="bottom arrow"
            width={16}
            height={16}
            className="h-5 w-5"
          />
        </div>

        <div className="flex justify-between w-[100%] gap-10 mt-4">
          <div className="flex-1 w-[50%]">
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
            <div className="flex items-end mb-6 gap-5">
              <div className="flex-1 w-[50%]">
                <DropdownInputWithLabels
                  label={"Baggage"}
                  labelClassName={"block text-sm font-medium text-gray-500"}
                  inputName={"departureBaggage"}
                  options={baggageOptions}
                  value={warrantBookingInput.departureBaggage}
                  setValue={handleInputChange}
                  inputClassName={
                    "w-full p-2 border border-gray-300 rounded-md"
                  }
                />
              </div>
              <div className="flex-1 w-[50%]">
                <DropdownInputWithLabels
                  label={"Sport Equipment"}
                  labelClassName={"block text-sm font-medium text-gray-500"}
                  inputName={"departureEquipment"}
                  options={baggageOptions}
                  value={warrantBookingInput.departureEquipment}
                  setValue={handleInputChange}
                  inputClassName={
                    "w-full p-2 border border-gray-300 rounded-md"
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex-1 w-[50%]">
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
            <div className="flex items-end mb-6 gap-5">
              <div className="flex-1 w-[50%]">
                <DropdownInputWithLabels
                  label={"Baggage"}
                  labelClassName={"block text-sm font-medium text-gray-500"}
                  inputName={"returnBaggage"}
                  options={baggageOptions}
                  value={warrantBookingInput.returnBaggage}
                  setValue={handleInputChange}
                  inputClassName={
                    "w-full p-2 border border-gray-300 rounded-md"
                  }
                />
              </div>
              <div className="flex-1 w-[50%]">
                <DropdownInputWithLabels
                  label={"Sport Equipment"}
                  labelClassName={"block text-sm font-medium text-gray-500"}
                  inputName={"returnEquipment"}
                  options={baggageOptions}
                  value={warrantBookingInput.returnEquipment}
                  setValue={handleInputChange}
                  inputClassName={
                    "w-full p-2 border border-gray-300 rounded-md"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[100%] p-2 flex justify-between bg-gray-100">
          <p>Preferences</p>
          <Image
            src={DownArrowIcon}
            alt="bottom arrow"
            width={16}
            height={16}
            className="h-5 w-5"
          />
        </div>
        <div className="mb-4">
          <p className="py-2">Travel Agencies</p>
          <div className="px-4">
            {travelAgencyList?.map((agency) => (
              <div className="flex justify-between" key={agency.id}>
                <p>{agency.name}</p>
                <input
                  type="checkbox"
                  name="travelAgency"
                  checked={warrantBookingInput.travelAgency?.includes(agency.id)}
                  className=" h-4 w-4"
                  onChange={(e) => handleCheckboxEvent(e)}
                  id="vehicle1"
                  value={agency.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingInformationInputComponent;
