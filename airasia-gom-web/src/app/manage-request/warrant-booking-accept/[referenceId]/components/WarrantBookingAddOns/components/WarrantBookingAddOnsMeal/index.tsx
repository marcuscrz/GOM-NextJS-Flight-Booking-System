import IncludedIcon from "../IncludedCircleIcon";
import mealIcon from "../../../../../../../assets/meal-icon.png"
const WarrantBookingAddOnsMealComponent = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="flex items-center">
        <img
          src={mealIcon.src}
          alt="Luggage Icon"
          width={32}
          height={32}
          className="mr-2"
        />
        <div>
          <h2 className="font-bold">Santan Meal Value</h2>
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
        <div className="w-[80%]">
          <p>Total: MYR 64.40</p>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-400">Kuala Lumpur - Bail</p>
              <div>
                <div className="flex gap-1">
                  <p>1 x Hyderabadi Vegetable Biryani</p>
                  <IncludedIcon />
                </div>

                <p>1 x 8 Trasure Rice Bowl</p>

                <div className="flex gap-1">
                  <p>1 x Uncle Chin's Chicken Rice</p>
                  <IncludedIcon />
                </div>

                <p>1 x 8 Tresure Rice Bowl + Americano</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400">Kuala Lumpur - Bail</p>
              <div>
                <div className="flex gap-1">
                  <p>1 x Hyderabadi Vegetable Biryani</p>
                  <IncludedIcon />
                </div>

                <p>1 x 8 Treasure Rice Bowl</p>

                <div className="flex gap-1">
                  <p>1 x Pak Nassesr's Nasi Lemak</p>
                  <IncludedIcon />
                </div>
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

export default WarrantBookingAddOnsMealComponent;
