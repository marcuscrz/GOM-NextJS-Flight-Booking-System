"use client";

import { use, useState, useEffect } from "react";
import { IWarrantBookingDetails } from "../types/type";
import WarrantBookingGridComponent from "./components/WarrantBookingGrid";
import WarrantBookingSearchComponent from "./components/WarrantBookingSearch";
import { BreadcrumbsComponent } from "@/app/components/Breadcrumbs";
import { tripTypeEnum } from "../../../new-booking/helper/tripTypeEnum";
import { warrantBookingBreadcrumbs } from "./helper/breadcrumbs";
import manageRequestData from "../../../test-data/manageRequest.json";
import WarrantBookingDepartDetailsComponent from "./components/WarrantBookingDepartingDetails";
import warrantBookingDetailsJson from "../../../test-data/warrantBookingInfo.json";
import WarrantBookingReturningDetailsComponent from "./components/WarrantBookingReturningDetails";
import {
  warrantBookingNextButtonStep,
  warrantBookingNextButtonSubmitStep,
} from "./helper/warrantNextButtonStep";
import WarrantBookingAddOnsComponent from "./components/WarrantBookingAddOns";
import WarrantBookingReviewComponent from "./components/WarrantBookingReview";
import { IManageRequestData } from "../../types/page";
import FareSummaryComponent from "@/app/components/FareSummary";
import { IFareDetails } from "../types/type";
import fareinfo from "../../../test-data/fareInfo.json"

type WarrantBookingStep = 1 | 2 | 3;

export default function ManageRequestBooking({
  params
}: {
  params: Promise<{ referenceId: string }>
}) {
  // const { referenceId } = use(params);
  const [step, setStep] = useState<WarrantBookingStep>(1);
  const [tripButton, setTripButton] = useState<string>(tripTypeEnum.RoundTrip);
  const [requestDetails, setRequestDetails] = useState<IManageRequestData>();
  const [isOpen, setIsOpen] = useState(false);
  const [warrantBookingDetails, setWarrantBookingDetails] = useState<IWarrantBookingDetails>({
    origin: "",
    originShortName: "",
    destination: "",
    destinationShortName: "",
    departureDate: "",
    isFlexibaleWithDates: false,
    returnDate: "",
    departDepartureTime: "",
    departArrivalTime: "",
    departTravelTime: "",
    returnDepartureTime: "",
    returnArrivalTime: "",
    returnTravelTime: "",
    adult: 0,
    child: 0,
    infant: 0,
    guest: 0,
    cabinType: "",
    currency: "",
    expectedFare: 0,
    departureBaggage: 0,
    departureEquipment: 0,
    returnBaggage: 0,
    returnEquipment: 0,
    planeModel: "",
    planeNumber: "",
  });

  const fetchManageRequest = async () => {
    const { referenceId } = await params;
    const details: IManageRequestData[] = manageRequestData.filter(
      (item: IManageRequestData) => item.referenceId === +referenceId
    );

    if (details) {
      setRequestDetails(details[0]);
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
    const { name, value, checked } = e.target;
    setWarrantBookingDetails((prev) => ({
      ...prev,
      [name]: name === "isFlexibaleWithDates" ? checked : value,
    }));
  };

  const handleFieldChange = (key: string, value: string) => {
    setWarrantBookingDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNextStep = () => {
    if (
      step <= 3 &&
      warrantBookingNextButtonStep[step].label === warrantBookingNextButtonSubmitStep
    ) {
      console.log("Final Submit Step");
    } else {
      setStep((step + 1) as WarrantBookingStep);
    }
  };

   useEffect(() => {
    fetchManageRequest();

    // Preload warrant booking test data
    setWarrantBookingDetails({
      ...warrantBookingDetailsJson,
    });
  }, []);

if (!requestDetails) {
  return <div className="p-10">Request not found</div>;
}

  return (
    <div>
      {step === 1 && (
        <>
          <div className="px-14 py-4">
            <WarrantBookingSearchComponent
              warrantBookingInput={warrantBookingDetails}
              setWarrantBookingInput={setWarrantBookingDetails}
              tripButton={tripButton}
              setTripButton={setTripButton}
              handleValue={handleValue}
              handleFieldChange={handleFieldChange}
            />
          </div>
          <hr className="mt-2" />
          

          <div className="px-50 py-10">
            <BreadcrumbsComponent
              items={warrantBookingBreadcrumbs}
              activeId={3}
            />
            <WarrantBookingGridComponent
              warrantDetails={warrantBookingDetails}
            />
            <h1 className="text-lg font-semibold pb-6">Departing flights</h1>
            <WarrantBookingDepartDetailsComponent
              warrantBookingInput={warrantBookingDetails}
            />
            <div className="mt-10">
              <WarrantBookingGridComponent
                warrantDetails={warrantBookingDetails}
              />
            </div>
            <h1 className="text-lg font-semibold pb-6">Returning Flights</h1>
            <WarrantBookingReturningDetailsComponent
              warrantBookingInput={warrantBookingDetails}
            />
          </div>
          <div className="flex flex-row-reverse px-50 py-10">
            <button
              type="submit"
              onClick={handleNextStep}
              className="px-18 py-3 bg-green-400 border-2 border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600"
            >
              {warrantBookingNextButtonStep[step as WarrantBookingStep].label}
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="px-8 py-10 bg-[#F7F7F7]">
            <BreadcrumbsComponent
              items={warrantBookingBreadcrumbs}
              activeId={4}
            />

            <div className=" flex w-full gap-4">
              <div className=" w-4/5 p-4 rounded-lg">
                <WarrantBookingAddOnsComponent />
              </div>

              <div className="  w-1/3 p-4 rounded-lg justify-between">
                <FareSummaryComponent
                fareDetails={fareinfo}
                />

                <div className="  flex justify-end pt-50">
                  <button
                    type="submit"
                    onClick={handleNextStep}
                    className="px-18 py-3 bg-green-400 border-2 border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600"
                  >
                    {
                      warrantBookingNextButtonStep[step as WarrantBookingStep]
                        .label
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {step === 3 && (
        <div className="px-20 py-10 bg-[#F7F7F7]">
          <BreadcrumbsComponent
            items={warrantBookingBreadcrumbs}
            activeId={5}
          />
          <WarrantBookingReviewComponent
            requestDetails={requestDetails}
            warrantDetails={warrantBookingDetails}
            fareDetails={fareinfo}
          />
          <div className="my-14 flex justify-end">
            <button
              type="submit"
              onClick={handleNextStep}
              className="px-12 py-3 bg-green-400 border-2 border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600 ml-auto"
            >
              {
                warrantBookingNextButtonStep[step as WarrantBookingStep]
                  .label
              }
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
