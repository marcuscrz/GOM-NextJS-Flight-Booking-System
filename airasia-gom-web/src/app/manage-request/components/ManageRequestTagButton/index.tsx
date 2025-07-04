import { requestStatusFilterEnum } from "../../helper/requestStatus";

type ManageRequestTagButtonComponentProps = {
  status: string;
  setStatus: (input: string) => void;
};

const ManageRequestTagButtonComponent = ({
  status,
  setStatus,
}: ManageRequestTagButtonComponentProps) => {
  return (
    <div className="flex items-start gap-4 mb-4 mt-10 ">
      <div className="w-[120px]">
        <button
          type="submit"
          onClick={() => setStatus(requestStatusFilterEnum.all)}
          className={`
            "flex items-center justify-center h-8 w-32 cursor-pointer rounded-3xl hover:bg-red-600 hover:text-white "
            ${
              status === requestStatusFilterEnum.all
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-black"
            }
            `}
        >
          {requestStatusFilterEnum.all}
        </button>
      </div>
      <div className="w-[120px]">
        <button
          type="submit"
          onClick={() => setStatus(requestStatusFilterEnum.pending)}
          className={`
            "flex items-center justify-center h-8 w-32 cursor-pointer rounded-3xl hover:bg-red-600 hover:text-white "
            ${
              status === requestStatusFilterEnum.pending
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-black"
            }
            `}
        >
          {requestStatusFilterEnum.pending}
        </button>
      </div>
      <div className="w-[120px]">
        <button
          type="submit"
          onClick={() => setStatus(requestStatusFilterEnum.approved)}
          className={`
            "flex items-center justify-center h-8 w-32 cursor-pointer rounded-3xl hover:bg-red-600 hover:text-white "
            ${
              status === requestStatusFilterEnum.approved
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-black"
            }
            `}
        >
          {requestStatusFilterEnum.approved}
        </button>
      </div>
      <div className="w-[120px]">
        <button
          type="submit"
          onClick={() => setStatus(requestStatusFilterEnum.canceled)}
          className={`
            "flex items-center justify-center h-8 w-32 cursor-pointer rounded-3xl hover:bg-red-600 hover:text-white "
            ${
              status === requestStatusFilterEnum.canceled
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-black"
            }
            `}
        >
          {requestStatusFilterEnum.canceled}
        </button>
      </div>
    </div>
  );
};

export default ManageRequestTagButtonComponent;
