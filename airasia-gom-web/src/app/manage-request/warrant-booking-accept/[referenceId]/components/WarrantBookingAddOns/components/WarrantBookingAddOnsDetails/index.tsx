import IncludedIcon from "../IncludedCircleIcon";

const WarrantBookingAddOnsDetailsComponent = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Add-on bundles</h1>
      <div className="bg-[#F7F7F7] p-4 w-[70%]  shadow-md border border-gray-400">
        <h2 className="text-lg font-bold">Premium Flatbed</h2>
        <p className="text-sm text-gray-700 mb-3">Extra comfort</p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>7 kg carry-on baggage</li>
          <li>40 kg checked baggage</li>
          <li>Flatbed</li>
          <li>1 meal</li>
          <li>
            Lounge access at Kuala Lumpur, Sydney, Melbourne, Hong Kong, Taipei
            and Seoul (up to 3 hours)
          </li>
          <li>
            On-Time Guarantee & Baggage Delay for all flights. <br />
            Flexi Cancellation Lite
            <br />
            <span className="text-xs text-gray-500">
              *Only for flights from/to MY or from/to TH (Excl. China
              departure)*
            </span>
          </li>
          <li>Unlimited date/time change</li>
          <li>Xpress baggage delivery, boarding and check-in</li>
          <li>
            RM50 Pre-book duty-free voucher for AK, D7 and QZ flights{" "}
            <span className="text-green-600 font-semibold">(FREE)</span>
          </li>
        </ul>
      </div>
      <div className="bg-green-100 w-[70%] p-2 flex justify-between shadow-md border text-sm border-gray-400">
        <div>
          <h1>KUL-ICN</h1>
          <p className="text-gray-400">Depart</p>
        </div>
        <div className="">
          <h1>Included</h1>
          <p className="text-gray-400">2 guest</p>
        </div>
      </div>
      <div className="bg-green-100 w-[70%] p-2 flex justify-between shadow-md border text-sm border-gray-400">
        <div>
          <span>ICN-KUL</span>
          <p className="text-gray-400">Depart</p>
        </div>
        <div className="">
          <span>Included</span>
          <p className="text-gray-400">2 guest</p>
        </div>
      </div>
    </div>
  );
};

export default WarrantBookingAddOnsDetailsComponent;
