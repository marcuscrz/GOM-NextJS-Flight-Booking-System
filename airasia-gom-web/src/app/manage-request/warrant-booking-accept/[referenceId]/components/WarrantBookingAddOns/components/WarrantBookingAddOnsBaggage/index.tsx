import bigLuggageIcon from "../../../../../../../assets/big-luggage-icon.png";
import circleicon from "../../../../../../../assets/Included-circle.png";
import IncludedIcon from "../IncludedCircleIcon";

const WarrantBookingAddOnsBaggageComponent = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="flex items-center">
        <img
          src={bigLuggageIcon.src}
          alt="Luggage Icon"
          width={32}
          height={32}
          className="mr-2"
        />
        <div>
          <h2 className="font-bold">Baggage</h2>
          <div className=" flex items-center gap-2">
            <IncludedIcon />
            <p className="text-green-400 text-xs">Included</p>
          </div>
          <p className="text-xs text-gray-400">
            Pre-book for the lowest price. Prices shown are for all flights in
            your trip.
          </p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] p-5 shadow-md border text-xs flex justify-between border-gray-400 space-y-1">
        <div className="w-[75%]">
          <p>Total: MYR 0.00</p>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-400">Kuala Lumpur - incheon</p>
              <div>
                <div className="flex gap-1">
                  <p>2 x 40kg Checked Baggage</p>
                  <IncludedIcon />
                </div>
                <p>2 x 7kg Carry-on baggage</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400">Kuala Lumpur - incheon</p>
              <div>
                <div className="flex gap-1">
                  <p>2 x 40kg checked baggage </p>
                  <IncludedIcon />
                </div>
                <p>2 x 7kg Carry-on baggage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center">
          <button className="text-red-600 pr-6 cursor-pointer">Modify</button>
        </div>
      </div>
    </div>
  );
};
export default WarrantBookingAddOnsBaggageComponent;
