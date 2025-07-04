
import WarrantBookingAddOnsBaggageComponent from "./components/WarrantBookingAddOnsBaggage";
import WarrantBookingAddOnsDetailsComponent from "./components/WarrantBookingAddOnsDetails";
import WarrantBookingAddOnsMealComponent from "./components/WarrantBookingAddOnsMeal";
import WarrantBookingAddOnsSeatComponent from "./components/WarrantBookingAddOnsSeat";
import WarrantBookingAddOnsInsuranceComponent from "./components/WarrantBookingAddOnsInsurance";
const WarrantBookingAddOnsComponent = () => {
  return (
    <div className=" space-y-5">
      <div>
      <WarrantBookingAddOnsDetailsComponent />
      </div>

      <div>
        <WarrantBookingAddOnsBaggageComponent />
      </div>

      <div>
        <WarrantBookingAddOnsSeatComponent />
      </div>

      <div>
        <WarrantBookingAddOnsMealComponent />
      </div>

      <div>
        <WarrantBookingAddOnsInsuranceComponent />
      </div>
    </div>
  );
};

export default WarrantBookingAddOnsComponent;
