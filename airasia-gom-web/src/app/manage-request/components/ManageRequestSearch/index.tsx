import { ISearchParams } from "../../types/page";

type ManageRequestSearchComponentProps = {
  searchParams: ISearchParams;
  handleValue: (input: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

const ManageRequestSearchComponent = ({
  searchParams,
  handleValue,
  handleSubmit,
}: ManageRequestSearchComponentProps) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-end gap-10 mb-6 mt-4">
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-500">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              value={searchParams.origin}
              onChange={(e) => handleValue(e)}
              className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              placeholder="City/Airport..."
            />
          </div>

          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-500">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={searchParams.destination}
              onChange={(e) => handleValue(e)}
              className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              placeholder="City/Airport..."
            />
          </div>
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-500">
              Flight Number
            </label>
            <input
              type="text"
              name="flightNumber"
              value={searchParams.flightNumber}
              onChange={(e) => handleValue(e)}
              className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              placeholder="Input flight number..."
            />
          </div>
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-500">
              Reference Id
            </label>
            <input
              type="text"
              name="referenceId"
              value={searchParams.referenceId}
              onChange={(e) => handleValue(e)}
              className="w-full h-[35px] p-2 border border-gray-300 rounded-md"
              placeholder="Input reference Id"
            />
          </div>
        </div>
        <div className="flex items-end gap-10 mb-6">
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-500">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="13 May 2025"
            />
          </div>
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trip Type
            </label>
            <select
              name="tripType"
              value={searchParams.tripType}
              onChange={handleValue}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              <option value="one-way">One Way</option>
              <option value="round-trip">Round Trip</option>
              <option value="multi-city">Multi City</option>
            </select>
          </div>
          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Request Status
            </label>
            <select
              name="status"
              value={searchParams.status}
              onChange={handleValue}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="flex-1 min-w-[100px] max-w-[200px]">
            <button
              type="submit"
              className="px-8 py-2 bg-green-500 border-2 w-[100%] border-gray-500 cursor-pointer text-white rounded-3xl hover:bg-green-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageRequestSearchComponent;
