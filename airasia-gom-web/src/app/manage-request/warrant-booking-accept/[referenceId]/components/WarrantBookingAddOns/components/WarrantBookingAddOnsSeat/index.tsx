import Chair from "../../../../../../../assets/plane-chair.png"
import IncludedIcon from "../IncludedCircleIcon";

const WarrantBookingAddOnsSeatComponent = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="flex items-center">
        <img
          src={Chair.src}
          alt="Luggage Icon"
          width={32}
          height={32}
          className="mr-2"
        />
        <div>
          <h2 className="font-bold">Pick a seat</h2>
          <div className=" flex items-center gap-2">
            <IncludedIcon />
            <p className="text-green-400 text-xs">Included</p>
          </div>
          <p className="text-xs text-gray-400">
            Choose your seat or we'll assign one you at random
          </p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] p-5 shadow-md flex justify-between border text-xs border-gray-400 space-y-1">
        <div className=" w-[70%]">
        <p>Total: MYR 0.00</p>

        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">Kuala Lumpur - incheon</p>
            <div>
              <div className="flex gap-1">
                <p>2 x Flatbed -2G,2D</p>
                  <IncludedIcon />
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-400">Kuala Lumpur - incheon</p>
            <div>
              <div className="flex gap-1">
                <p>2 x Flatbed -2G,2D</p>
                <IncludedIcon />
              </div>
            </div>
          </div>
        </div>

        </div>

          <div className="self-center">
            <button className="text-red-600 pr-6 cursor-pointer">
              {" "}
              Modify{" "}
            </button>
          </div>

      </div>
    </div>
  );
};

export default WarrantBookingAddOnsSeatComponent;
