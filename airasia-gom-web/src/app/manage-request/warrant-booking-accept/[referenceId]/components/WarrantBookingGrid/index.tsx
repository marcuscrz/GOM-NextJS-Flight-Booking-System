import { IWarrantBookingDetails } from "../../../types/type";
import { format } from "date-fns";

const grid_css = {
  grid_arrow_layout_css: "w-[4.5%] h-full flex items-center justify-center border-gray-500",
  grid_info_layout_css: "w-[13%] h-full border border-gray-500 py-1",
	grid_info_active_layout_css: "w-[13%] h-full border border-gray-500 py-1 bg-green-200",
  grid_info_date_css: "text-[15px] text-gray-400",
};

interface IWarrantBookingGridComponentProps {
  warrantDetails: IWarrantBookingDetails;
}

const WarrantBookingGridComponent = ({
  warrantDetails,
}: IWarrantBookingGridComponentProps) => {
	
  const formatDate = (dateString: any) => {
    return dateString ? format(dateString, "dd MMM") : "";
  };

  return (
    <div className="py-6">
      <div className="flex text-center w-full h-15 border border-gray-400 shadow-md shadow-gray-500/50">
        <div className={grid_css.grid_arrow_layout_css}>
          <span className="text-gray-400 text-3xl mt-auto mb-auto">{"<"}</span>
        </div>
        <div className={grid_css.grid_info_layout_css}>
          <span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
        </div>
        <div className={grid_css.grid_info_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_info_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_info_active_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_info_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_info_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_info_layout_css}>
					<span className={grid_css.grid_info_date_css}>
            {formatDate(warrantDetails.departureDate)}
          </span>
          <p>{warrantDetails.currency} {warrantDetails.expectedFare}</p>
				</div>
        <div className={grid_css.grid_arrow_layout_css}>
          <span className="text-gray-400 text-3xl mt-auto mb-auto">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default WarrantBookingGridComponent;
