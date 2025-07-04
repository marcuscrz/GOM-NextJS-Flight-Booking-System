'use client';

import { useState } from "react";
import { IWarrantBookingDetails } from "../../../types/type";
import Image from "next/image";

import BigLuggageIcon from "../../../../../assets/big-luggage-icon.png";
import SmallLuggageIcon from "../../../../../assets/small-luggage-icon.png";
import EditIcon from "../../../../../assets/edit-icon.png";
import GrayDots from "../../../../../assets/gray-dots.png";

interface IWarrantBookingReturningDetailsComponentProps {
  warrantBookingInput: IWarrantBookingDetails;
}

const WarrantBookingReturningDetailsComponent = ({
  warrantBookingInput,
}: IWarrantBookingReturningDetailsComponentProps) => {
  const [showAllOptions, setShowAllOptions] = useState(false);

  const toggleOptions = () => {
    setShowAllOptions(!showAllOptions);
  };

  const handleSelect = (index: number) => {
    setShowAllOptions(false);
  };

  const renderFlightOption = (index: number, isAdditional = false) => {
    const shouldShowSelect = showAllOptions;

    return (
      <div 
        key={index} 
        className="border-[1.5px] rounded-[4px] p-3 mb-3 border-gray-300"
      >
        <div className="w-full flex text-sm">
          <div>
            <h1>{warrantBookingInput.cabinType}</h1>
            <h1 className="text-gray-400">
              {warrantBookingInput.planeModel} {warrantBookingInput.planeNumber}
            </h1>
          </div>
        </div>

        <div className="w-full py-3 text-sm flex">
          <div className="h-full w-[20%] flex gap-7">
            <div>
              <h1 className="text-base">
                {warrantBookingInput.returnDepartureTime}
              </h1>
              <h1 className="text-gray-400 font-semibold">
                {warrantBookingInput.originShortName}
              </h1>
            </div>

            <div>
              <Image
                src={GrayDots}
                alt="Small luggage icon"
                className="h-[40px] w-auto mr-0.5"
              />
            </div>

            <div>
              <h1 className="text-base">
                {warrantBookingInput.returnArrivalTime}
              </h1>
              <h1 className="text-gray-400 font-semibold">
                {warrantBookingInput.destinationShortName}
              </h1>
            </div>
          </div>

          <div className="mt-auto mb-auto ml-22 text-gray-400 font-semibold">
            {warrantBookingInput.returnTravelTime}
          </div>

          <div className="mt-auto mb-auto ml-18 text-gray-400 font-semibold">
            <span>Non-stop</span>
          </div>

          <div className="ml-auto">
            <div>
              <span className="text-sm">{warrantBookingInput.currency}</span>
              <span className="text-lg font-bold">
                {warrantBookingInput.expectedFare}
              </span>
            </div>
            <div className="flex">
              <span className="text-gray-400 ml-auto">/2 guest</span>
            </div>
          </div>
        </div>

        <hr className={`py-1.5 border-gray-300 w-[75%] border-t-2`} />

        <div className="flex w-full gap-10 items-center">
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

          <div className="ml-auto w-[10%]">
            {shouldShowSelect ? (
              <button
                type="submit"
                className="px-3 py-2 w-[100%] border-2 cursor-pointer rounded-3xl bg-green-500 border-gray-500 hover:bg-green-600"
                onClick={() => handleSelect(index)}
              >
                Select
              </button>
            ) : (
              <div className="ml-5">
                <button
                  className="flex px-1 cursor-pointer"
                  onClick={() => setShowAllOptions(true)}
                >
                  <Image
                    src={EditIcon}
                    alt="Edit Icon"
                    className="h-[20px] w-auto mr-1"
                  />
                  <span className="text-blue-950 text-[15px]">Edit</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderFlightOption(0)}
      {showAllOptions && (
        <>{[1, 2].map((index) => renderFlightOption(index, true))}</>
      )}
    </div>
  );
};

export default WarrantBookingReturningDetailsComponent;