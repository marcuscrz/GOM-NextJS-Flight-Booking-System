import { useState } from "react";
import { IFareDetails } from "@/app/manage-request/warrant-booking-accept/types/type";

interface IFareSummaryComponentProps {
  fareDetails: IFareDetails;
  showToggle?: boolean; 
}

const FareSummaryComponent = ({ fareDetails, showToggle = true }: IFareSummaryComponentProps) => {
  const [isOpen, setIsOpen] = useState(!showToggle); 

  const totalAmount =
    fareDetails.baseFare +
    fareDetails.taxesFeesSurcharges +
    fareDetails.addOns +
    fareDetails.agencyFees;

  const formatCurrency = (amount: number) => {
    return `${fareDetails.currency} ${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="px-4 py-0 rounded-lg flex flex-col justify-between">
      <div className="border bg-white p-4 shadow-md rounded-md">
        <div className="flex justify-between items-center">

        <h2 className="font-semibold text-md">Fare Summary</h2>
        {showToggle && (
          <div
            className="flex text-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? "Show less ▲" : "Show more ▼"}</span>
          </div>
        )}
        </div>

        {isOpen && (
          <div className="mt-3 text-xs text-gray-800 space-y-7">
            <hr />
            <div className="flex justify-between">
              <span>Base Fare</span>
              <span>{formatCurrency(fareDetails.baseFare)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes, fees, surcharges</span>
              <span>{formatCurrency(fareDetails.taxesFeesSurcharges)}</span>
            </div>
            <div className="flex justify-between">
              <span>Add-ons</span>
              <span>{formatCurrency(fareDetails.addOns)}</span>
            </div>
            <div className="flex justify-between">
              <span>Agency Fees</span>
              <span>{formatCurrency(fareDetails.agencyFees)}</span>
            </div>
          </div>
        )}

        <hr className="mt-6 mb-5" />
        <div className="flex justify-between text-sm text-black">
          <span>Total amount</span>
          <span className="font-semibold">{formatCurrency(totalAmount)}</span>
        </div>
      </div>
    </div>
  );
};

export default FareSummaryComponent;