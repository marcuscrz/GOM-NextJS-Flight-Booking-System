import Link from "next/link";

interface ManageAcceptRejectButtonProps {
  referenceId: number;
}

const ManageAcceptRejectButtonComponent = ({
  referenceId,
}: ManageAcceptRejectButtonProps) => {
  return (
    <div className="ml-auto flex flex-row-reverse pt-20 gap-6">
      <Link href={`/manage-request/warrant-booking-accept/${referenceId}`}>
        <button className="px-18 py-3 bg-green-400 border-2 border-gray-500 cursor-pointer rounded-3xl hover:bg-green-600">
          Accept
        </button>
      </Link>
      <button className="px-18 py-3 bg-red-500 border-2 border-gray-500 cursor-pointer rounded-3xl text-white hover:bg-red-600">
        Reject
      </button>
    </div>
  );
};

export default ManageAcceptRejectButtonComponent;
