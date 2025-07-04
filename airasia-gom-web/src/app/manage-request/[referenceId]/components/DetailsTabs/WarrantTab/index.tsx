import { IWarrantData } from "@/app/manage-request/types/page";
import { format } from "date-fns";

interface IWarrantProps {
  warrantDetails: IWarrantData;
}

const RequestWarrantTabComponent = ({ warrantDetails }: IWarrantProps) => {
  return (
    <div className="p-3 w-[100%] border-1 border-gray-300">
      <div className="bg-gray-100 w-[95%] px-4 py-3 flex">
        <div className="flex">
          <div>
            <div className="flex">
              <h1 className="font-bold mb-4">Warrants Number:</h1>
              <h1 className="ml-6">{warrantDetails.warrantNumber}</h1>
            </div>

            <div className="flex">
              <h1 className="font-bold mb-3">Warrants Updated:</h1>
              <h1 className="ml-6">
                {format(
                  warrantDetails.warrantUpdateDate,
                  "dd MMM yyyy, hh:mm a"
                )}
              </h1>
            </div>
          </div>

          <div className="flex ml-12">
            <h1 className="font-bold">Status:</h1>
            <span
              className={`font-semibold h-6 ml-7 items-center px-3 rounded-lg text-sm align-middle flex ${
                warrantDetails.warrantStatus === "Issued"
                  ? "bg-green-100 text-green-900"
                  : warrantDetails.warrantStatus === "Pending"
                  ? "bg-yellow-100 text-yellow-900"
                  : "bg-red-100 text-red-900"
              }`}
            >
              {warrantDetails.warrantStatus}
            </span>
          </div>
        </div>

        <button className="flex ml-auto mt-auto mb-auto mr-13 text-red-500 font-semibold cursor-pointer hover:text-red-700">
          View
        </button>
      </div>

      <div className="py-15 w-[160px] ml-auto mr-23 mb-20">
        <button
          type="submit"
          className="px-1 py-3 bg-green-400 border-2 w-[100%] border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600"
        >
          Verify Warrant
        </button>
      </div>
    </div>
  );
};

export default RequestWarrantTabComponent;
