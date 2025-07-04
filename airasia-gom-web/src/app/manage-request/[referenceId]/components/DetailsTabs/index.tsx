import detailTabs from "./detailTabs.json";
import React from "react";
import RequestDetailsTabComponent from "./DetailsTab";
import RequestLogTabComponent from "./LogTab";
import RequestPassengersTabComponent from "./PassengersTab";
import RequestWarrantTabComponent from "./WarrantTab";
import { IManageRequestData } from "@/app/manage-request/types/page";
import { IPassengerData } from "./DetailsTab/components/Types/Tabs";
import { IWarrantData } from "@/app/manage-request/types/page";
import warrantInfo from "../DetailsTabs/WarrantTab/warrantInfo.json";
import { IFlightPreferance } from "./DetailsTab/Types/Tabs";
import { IWarrantBookingInput } from "@/app/new-booking/types/page";
import logData from "../../../../test-data/log.json"
type DetailsRequestTabComponentProps = {
  selectedTab: number;
  setSelectedTab: (input: number) => void;
  requestDetails: IManageRequestData;
  passengers: IPassengerData[];
  warrantDetails: IWarrantData;
  flightDetails: IFlightPreferance;
  warrantBookingInput: IWarrantBookingInput;
  handleCheckboxEvent: (input: React.ChangeEvent<any>) => void;
  
};

const DetailsRequestTabComponent = ({
  selectedTab,
  setSelectedTab,
  requestDetails,
  flightDetails,
  warrantBookingInput,
  handleCheckboxEvent,
}: // warrantDetails,
DetailsRequestTabComponentProps) => {
  const warrantDetails: IWarrantData = warrantInfo[0];

  return (
    <div>
      <div className="flex items-start gap-[1px] mt-10 ">
        {detailTabs?.map((detailTab) => (
          <button
            key={detailTab.key}
            type="submit"
            onClick={() => setSelectedTab(detailTab.key)}
            className={`
            "flex items-center justify-center h-8 w-32 cursor-pointer rounded-t-md hover:bg-black hover:text-white "
            ${
              selectedTab === detailTab.key
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }
            `}
          >
            {detailTab.label}
          </button>
        ))}
      </div>
      {selectedTab === detailTabs[0].key && (
        <RequestDetailsTabComponent requestDetails={requestDetails} 
        flightDetails={flightDetails}
        warrantBookingInput={warrantBookingInput} 
        handleCheckboxEvent={handleCheckboxEvent}
        />
      )}
      {selectedTab === detailTabs[1].key && (
        <RequestPassengersTabComponent requestDetails={requestDetails} />
      )}
      {selectedTab === detailTabs[2].key && (
        <RequestWarrantTabComponent warrantDetails={warrantDetails} />
      )}
      {selectedTab === detailTabs[3].key && <RequestLogTabComponent LogData={logData} />}
    </div>
  );
};

export default DetailsRequestTabComponent;
