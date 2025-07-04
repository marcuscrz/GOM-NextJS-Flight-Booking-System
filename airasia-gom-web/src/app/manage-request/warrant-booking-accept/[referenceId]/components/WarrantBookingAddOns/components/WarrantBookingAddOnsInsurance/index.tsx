import { useState } from "react";
import insuranceicon from "../../../../../../../assets/insurance-icon.png";

const WarrantBookingAddOnsInsuranceComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (option: string) => {
    setSelectedOption((prev) => (prev === option ? "" : option));
  };

  return (
    <div className="bg-white p-6 shadow-md">
      <div className="flex items-center">
        <img
          src={insuranceicon.src}
          alt="Luggage Icon"
          width={32}
          height={32}
          className="mr-2"
        />
        <div>
          <h2 className="font-bold">Insurance</h2>
          <p className="text-xs text-gray-400">
            Protect your trip from unwanted mishaps
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-between mt-4">
        {/* Option 1 */}
        <div className="border-2 w-1/2 p-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blue-600"
              checked={selectedOption === "plus"}
              onChange={() => handleCheckboxChange("plus")}
            />
            <img
              src={insuranceicon.src}
              alt="Insurance Icon"
              className="w-6 h-6"
            />
            <span className="text-sm">Comprehensive Travel Insurance PLUS</span>
          </label>

          <div className="p-3">
          <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
            <li>Preffered: All-in Travel Inconvenience Benefits under LITE Plan</li>
            <li>New! Cashless Hospital Admission Service</li>
            <li>COVID-19 Medical Cover Only</li>
            <li>On-time Guarantee for 2 Hours Flight Delay & More</li>
          </ul>
          <button className="text-red-600 text-xs pr-6 cursor-pointer">View All Benefits</button>

          </div>
          <div className="flex gap-1">
          <p className="text-xs">By Selecting the insurance, i aggree to the </p>
          <span className="text-red-600 text-xs">Term And Conditions</span>
          </div>
          <div className="flex justify-end">
            <div>
            <span>RM148.00</span>
            <span className="text-xs text-gray-400 flex justify-end"> for 2 guest</span>  
            </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="border-2 w-1/2 p-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 accent-blue-600"
              checked={selectedOption === "lite"}
              onChange={() => handleCheckboxChange("lite")}
            />
            <img
              src={insuranceicon.src}
              alt="Insurance Icon"
              className="w-6 h-6"
            />
            <span className="text-sm">Comprehensive Travel Insurance LITE</span>
          </label>

          <div className="p-3">
          <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
            <li>Basic Insurence cover for your trip. </li>
            <li>Medical Expresses for Sickness & Accident (Return Flight Only).</li>
            <li>Loss/Damanage of Check-in Baggage </li>
            <li>Trip inconcenience Baggage & Flight Delay</li>
          </ul>
            <button className="text-red-600 text-xs pr-6 cursor-pointer">View All Benefits</button>
          </div>
          <div className="flex justify-end">
            <div className="pt-4">
              <span>RM61.00</span>
              <span className="text-xs text-gray-400 flex justify-end"> for 2 guest</span>  
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className="text-xs text-justify ">
          This product is underwritten by Tune insurance Malaysia Berhad("TIMB"), licensed under the Financial Service Act 2013,
          and regulated by Bank Negara Malaysia And AirAsia X Berhad are the registered afents of TIMB. This product is specifically designed
          and made avalable for AirAsia Berhad and the AirAsia MOVE platform. By proceeding with the purchase of this product on this platform, 
          the applicable commision will be charged
        </p>
      </div>
    </div>
  );
};

export default WarrantBookingAddOnsInsuranceComponent;
