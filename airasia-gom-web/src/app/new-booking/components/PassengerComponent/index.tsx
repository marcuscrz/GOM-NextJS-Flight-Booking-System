"use client";

import {
  IPassengers,
  IWarrantBookingInput,
  IWarrantBookingPassenger,
} from "../../types/page";
import passengersData from "@/app/test-data/passenger.json";
import DownArrowIcon from "../../../assets/down-arrow.png";
import Image from "next/image";
import { useState } from "react";

type PassengersListComponentProps = {
  warrantBookingInput: IWarrantBookingInput;
  handlePassengerCheckboxEvent: (
    e: React.ChangeEvent<any>,
    passengerId: string
  ) => void;
};

export const PassengersListComponent = ({
  warrantBookingInput,
  handlePassengerCheckboxEvent,
}: PassengersListComponentProps) => {
  const [expandedPassengers, setExpandedPassengers] = useState<
    Record<string, boolean>
  >({});

  const getPassengerData = (passengerId: string) => {
    return passengersData.find(
      (passenger) => passenger.id === passengerId
    ) as IWarrantBookingPassenger;
  };

  const togglePassenger = (passengerId: string) => {
    setExpandedPassengers((prev) => ({
      ...prev,
      [passengerId]: !prev[passengerId],
    }));
  };

  const checkePassengerFamilyHandler = (
    passengerData: IPassengers,
    familyMemberId: string
  ) => {
    return passengerData.familyMembers.includes(familyMemberId);
  };

  return (
    <>
      <div className="w-[100%] gap-10 m-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
        <div className="bg-gray-100 rounded p-4">
          <p className="text-gray-500 text-xs font-bold">Selected</p>
          <div>
            {warrantBookingInput.passengers.map((passenger: IPassengers) => {
              const passengerData: IWarrantBookingPassenger = getPassengerData(
                passenger.id
              );
              return (
                <div
                  key={passengerData.id}
                  className="py-2 flex justify-between gap-5 md:gap-10 border-b-1 border-b-gray-300 "
                >
                  <p className="w-[35%] text-left font-bold text-sm">
                    {passengerData.name}
                  </p>
                  <p className="flex-1 text-gray-400 text-sm">
                    {passengerData.email}
                  </p>
                  <p className="flex-1 text-right text-gray-400 text-sm">
                    {passengerData.userId}
                  </p>
                  <p className="flex-1 text-right pr-10 text-gray-400 cursor-pointer">
                    X
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          {warrantBookingInput.passengers.map((passenger: IPassengers) => {
            const passengerData: IWarrantBookingPassenger = getPassengerData(
              passenger.id
            );
            const isExpanded = expandedPassengers[passengerData.id] || false;
            return (
              <div
                key={passengerData.id}
                className="py-2 gap-5 md:gap-10 bg-gray-100 rounded p-4 mt-5 cursor-pointer"
              >
                <div
                  className="flex justify-between"
                  onClick={() => togglePassenger(passengerData.id)}
                >
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
                {isExpanded && (
                  <div className="mt-4">
                    <p className="text-left font-bold text-sm border-b-1 border-b-gray-300 mb-2">
                      Family Members
                    </p>
                    <div className="grid grid-cols-2">
                      {passengersData?.map((rePassenger) => {
                        const rePassengerRefId = rePassenger.familyRefId;
                        if (rePassengerRefId !== passenger.id) {
                          return undefined;
                        }
                        return (
                          <div className="flex" key={rePassenger.id}>
                            <input
                              type="checkbox"
                              name={"passengers"}
                              checked={checkePassengerFamilyHandler(
                                passenger,
                                rePassenger.id
                              )}
                              className=" h-4 w-4 cursor-pointer mr-2"
                              onChange={(e) =>
                                handlePassengerCheckboxEvent(e, passenger.id)
                              }
                              value={rePassenger.id}
                            />
                            <p className="font-medium text-sm pb-2">
                              {rePassenger.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
