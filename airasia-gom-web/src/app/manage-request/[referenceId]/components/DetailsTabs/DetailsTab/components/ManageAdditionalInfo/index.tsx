import { IManageRequestData } from "@/app/manage-request/types/page";

interface IProps {
  requestDetails: IManageRequestData;
}

const ManageAdditionalInformationComponent = ({
  requestDetails: data,
}: IProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-red-600 font-bold">Additional Information</h1>
      <hr className="border-t-2 border-gray-300 mb-2" />

      <div className="h-[100px] w-[690px] text-gray-400 mb-2 gap-14">
        <div className="h-11 flex w-full mb-3">
          <div className="w-1/3">
            <p className="text-sm">Pukal Number</p>
            <h2 className="text-black text-[15px] mb-3">
              {data?.pukalNumber || "N/A"}
            </h2>
          </div>
          <div className="w-1/3">
            <p className="text-sm">Object Number</p>
            <h2 className="text-black text-[15px] mb-3">
              {data?.objectNumber || "N/A"}
            </h2>
          </div>
          <div className="w-1/3">
            <p className="text-sm">Travel Agencies</p>
            <h2 className="text-black text-[15px] mb-3">
              {data?.travelAgencies || "N/A"}
            </h2>
          </div>
        </div>
        <div className="w-full h-11">
          <p className="text-sm">Remarks</p>
          <h2 className="text-[15px] mb-3" style={{ color: "#7679bc" }}>
            {data?.remarks || "N/A"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ManageAdditionalInformationComponent;
