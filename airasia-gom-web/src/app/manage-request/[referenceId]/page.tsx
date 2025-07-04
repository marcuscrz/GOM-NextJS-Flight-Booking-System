"use client";

import { useState, useEffect } from "react";
import { IManageRequestData } from "../types/page";
import { IWarrantData } from "../types/page";
import { IPassengerData } from "./components/DetailsTabs/DetailsTab/components/Types/Tabs";
import manageRequestData from "../../test-data/manageRequest.json";
import detailTabs from "./components/DetailsTabs/detailTabs.json";
import DetailsRequestTabComponent from "./components/DetailsTabs";
import QuotationInfoComponent from "./components/QuotationInfo";
import warrantInfo from "./components/DetailsTabs/WarrantTab/warrantInfo.json";
import { IFlightPreferance } from "./components/DetailsTabs/DetailsTab/Types/Tabs";
import FlightPreference from "../../test-data/flightPreferance.json";
import newBookingPreInput from "../../test-data/newBookingPreInput.json"


export default function ManageRequestDetails({
  params,
}: {
  params: Promise<{ referenceId: number }>;
}) {
  const [requestDetails, setRequestDetails] = useState<IManageRequestData>();
  const [selectedTab, setSelectedTab] = useState<number>(detailTabs[0].key);
  const [passengers] = useState<IPassengerData[]>([]);
  const [warrantDetails] = useState<IWarrantData>(warrantInfo[0]);
  const [flightDetails] = useState<IFlightPreferance>(FlightPreference);
  const handleCheckboxEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, checked } = event.target;
  console.log(`Checkbox ${name} changed to ${checked}`);
};

  const fetchManageRequest = async () => {
    const { referenceId } = await params;
    const details: IManageRequestData[] = manageRequestData.filter(
      (item: IManageRequestData) => item.referenceId === +referenceId
    );

    if (details) {
      setRequestDetails(details[0]);
    }
  };
  useEffect(() => {
    fetchManageRequest();
  }, []);

  if (!requestDetails) {
    return <div className="p-10">Request not found</div>;
  }
  return (
    <div className="p-10">
      <h1 className="text-black font-bold mb-4">View details Quotation</h1>

      <QuotationInfoComponent requestDetails={requestDetails} />

      <DetailsRequestTabComponent
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        requestDetails={requestDetails}
        passengers={passengers}
        warrantDetails={warrantDetails}
        flightDetails={flightDetails}
        warrantBookingInput={newBookingPreInput}
        handleCheckboxEvent={handleCheckboxEvent}
      />
    </div>
  );
}