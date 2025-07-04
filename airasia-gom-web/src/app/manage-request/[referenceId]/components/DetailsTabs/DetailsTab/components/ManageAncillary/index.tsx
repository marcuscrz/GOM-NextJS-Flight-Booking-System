import { IManageRequestData } from "@/app/manage-request/types/page";

interface IProps {
  requestDetails: IManageRequestData;
}

const AncillaryInformationComponent = ({ requestDetails: data }: IProps) => {
  return (
    <div className="mb-11">
      <h1 className="text-red-600 font-bold">Ancillary</h1>
      <hr className="border-t-2 border-gray-300 mb-2" />

      <div className="h-[60px] w-[1100px] mb-4 gap-14">
        <div className="flex h-[24px] w-full mb-4">
          <div className="w-1/2">
            <h3 className="font-bold">Departure</h3>
          </div>
          <div className="w-1/2">
            <h3 className="font-bold">Return</h3>
          </div>
        </div>

        <div className="w-full flex text-gray-400">
          <div className="w-1/2 flex ">
            <div className="mr-22">
              <p className="text-sm">Baggage</p>
              <h2 className="text-black text-[15px] mb-3 mr-20">
                {data?.departureBaggageWeight
                  ? `${data.departureBaggageWeight} KG`
                  : "N/A"}
              </h2>
            </div>
            <div>
              <p className="text-sm">Sports Equipment</p>
              <h2 className="text-black text-[15px] mb-3">
                {data?.departureSportEquipmentWeight
                  ? `${data.departureSportEquipmentWeight} KG`
                  : "N/A"}
              </h2>
            </div>
          </div>

          <div className="w-1/2 flex">
            <div className="mr-22">
              <p className="text-sm">Baggage</p>
              <h2 className="text-black text-[15px] mb-3 mr-20">
                {data?.returnBaggageWeight
                  ? `${data.returnBaggageWeight} KG`
                  : "N/A"}
              </h2>
            </div>
            <div>
              <p className="text-sm">Sports Equipment</p>
              <h2 className="text-black text-[15px] mb-3">
                {data?.returnSportEquipmentWeight
                  ? `${data.returnSportEquipmentWeight} KG`
                  : "N/A"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AncillaryInformationComponent;
