import { IBookingLogEntry } from "../DetailsTab/Types/Tabs";
import format from "date-fns/format";

interface Iprops {
  LogData?: IBookingLogEntry[];
}

const RequestLogTabComponent = ({ LogData = [] }: Iprops) => {
  return (
    <div className="p-2 w-full border border-gray-300 pb-20">
      {LogData.length === 0 ? (
        <p className="text-sm text-gray-500">No logs available.</p>
      ) : (
        <ul className="relative">
          {LogData.map((log, index) => {
            const date = log.timestamp ? new Date(log.timestamp) : null;
            return (
              <li key={index} className="relative pl-2">
                <div>
                  {/* Dot and dotted vertical line */}
                  <div className="absolute  top-0 bottom-0 flex flex-col items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700"></span>
                    {index !== LogData.length - 1 && (
                      <span className="flex-1 w-px border-1 border-dotted border-gray-400"></span>
                    )}
                  </div>
                  <div className="flex  px-6 text-xs ">
                    <span className="font-bold mr-1 ">{log.type || "N/A"}</span>

                    <span>{log.message || "N/A"}</span>
                  </div>
                  <p className="text-xs text-gray-400 px-6 pb-2">
                    {date ? format(date, "dd MMM yyyy h:mm a") : "N/A"}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RequestLogTabComponent;
