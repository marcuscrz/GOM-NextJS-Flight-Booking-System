import Image from "next/image";
import OneWayIcon from "../../../assets/one-way.png";
import RoundWayIcon from "../../../assets/round-trip.png";
import { tripTypeEnum } from "../../helper/tripTypeEnum";

type BookingTripButtonComponentProps = {
  tripButton: string;
  setTripButton: (input: string) => void;
};

const BookingTripButtonComponent = ({
  tripButton,
  setTripButton,
}: BookingTripButtonComponentProps) => {
  return (
    <>
      <div className="felx items-start gap-2">
        <button
          onClick={() => setTripButton(tripTypeEnum.OneWay)}
          className={`
              "flex items-center justify-center h-8 w-32 px-4 py-1 gap-4 mr-3 text-sm cursor-pointer rounded-3xl hover:bg-indigo-800 hover:text-white "
              ${
                tripButton === tripTypeEnum.OneWay
                  ? "bg-indigo-800 text-white"
                  : "bg-gray-200 text-black"
              }
            `}
        >
          <Image
            src={OneWayIcon}
            alt="One Way"
            width={16}
            height={16}
            className="h-5 w-5"
          />
          <p className="mt-[-20px] ml-4">{tripTypeEnum.OneWay}</p>
        </button>

        <button
          onClick={() => setTripButton(tripTypeEnum.RoundTrip)}
          className={`
              "flex items-center justify-center h-8 w-32 px-4 py-1 text-sm cursor-pointer rounded-3xl hover:bg-indigo-800bg-blue-900 hover:text-white "
              ${
                tripButton === tripTypeEnum.RoundTrip
                  ? "bg-indigo-800 text-white"
                  : "bg-gray-200 text-black"
              }
            `}
        >
          <Image
            src={RoundWayIcon}
            alt="One Way"
            width={16}
            height={16}
            className="h-5 w-5"
          />
          <p className="mt-[-20px] ml-4">{tripTypeEnum.RoundTrip}</p>
        </button>
      </div>
    </>
  );
};

export default BookingTripButtonComponent;
