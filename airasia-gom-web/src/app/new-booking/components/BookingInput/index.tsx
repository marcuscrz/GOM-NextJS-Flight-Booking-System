import { useState } from "react";
import {
  IPassengers,
  IWarrantBookingInput,
  WarrantBookingCheckedFlightKey,
  WarrantBookingCheckedTravelAgencyKey,
} from "../../types/page";
import BookingInformationInputComponent from "../BookingInformationInput";
import {
  bookingNextButtonStep,
  bookingNextButtonSubmitStep,
} from "../../helper/bookingNextButtonStep";
import BookingTripButtonComponent from "../BookingTripButton";
import { BreadcrumbsComponent } from "@/app/components/Breadcrumbs";
import { newBookingBreadCrumbItems } from "../../helper/breadcrumbs";
import { FlightPreferenceListComponent } from "../FlightPreference";
import { PassengersListComponent } from "../PassengerComponent";
import { RewviewComponent } from "../Review";

type BookingInputComponentProps = {
  warrantBookingInput: IWarrantBookingInput;
  setWarrantBookingInput: (input: IWarrantBookingInput) => void;
};
type BookingStep = 1 | 2 | 3 | 4;

const BookingInputComponent = ({
  warrantBookingInput,
  setWarrantBookingInput,
}: BookingInputComponentProps) => {
  const [step, setStep] = useState<BookingStep>(1);

  const handleTripType = (value: string) => {
    setWarrantBookingInput({
      ...warrantBookingInput,
      tripType: value,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
  ) => {
    const { name, value, checked } = e.target;
    if (name === "isFlexibaleWithDates") {
      setWarrantBookingInput({
        ...warrantBookingInput,
        [name]: checked ? true : false,
      });
    } else {
      setWarrantBookingInput({
        ...warrantBookingInput,
        [name]: value,
      });
    }
  };

  const handleCheckboxEvent = (e: React.ChangeEvent<any>) => {
    const {
      name,
      value,
      checked,
    }: {
      name: WarrantBookingCheckedTravelAgencyKey;
      value: number;
      checked: boolean;
    } = e.target;
    let currentItems: number[] = warrantBookingInput[name] || [];
    if (checked) {
      currentItems?.push(+value);
    } else {
      currentItems = currentItems.filter((item) => item !== +value);
    }
    setWarrantBookingInput({
      ...warrantBookingInput,
      [name]: currentItems,
    });
  };

  const handlePassengerCheckboxEvent = (
    e: React.ChangeEvent<any>,
    passengerId: string
  ) => {
    const {
      name,
      value,
      checked,
    }: {
      name: "passengers";
      value: string;
      checked: boolean;
    } = e.target;
    let currentItems: IPassengers[] = warrantBookingInput[name] || [];
    const passengerIndex = currentItems.findIndex(
      (item) => item.id === passengerId
    );

    if (passengerIndex >= 0) {
      if (checked) {
        currentItems[passengerIndex].familyMembers.push(value);
      } else {
        currentItems[passengerIndex].familyMembers = currentItems[
          passengerIndex
        ].familyMembers.filter((item) => item !== value);
      }
    }

    setWarrantBookingInput({
      ...warrantBookingInput,
      [name]: currentItems,
    });
  };

  const handleFlightPreferenceCheckboxEvent = (e: React.ChangeEvent<any>) => {
    const {
      name,
      value,
      checked,
    }: {
      name: WarrantBookingCheckedFlightKey;
      value: string;
      checked: boolean;
    } = e.target;
    let currentItems: string[] = warrantBookingInput[name] || [];
    if (checked) {
      currentItems?.push(value);
    } else {
      currentItems = currentItems.filter((item) => item !== value);
    }
    setWarrantBookingInput({
      ...warrantBookingInput,
      [name]: currentItems,
    });
  };

  const handleFieldChange = (key: string, value: string) => {
    setWarrantBookingInput({
      ...warrantBookingInput,
      [key]: value,
    });
  };

  const handleNextStep = () => {
    if (
      step <= 4 &&
      bookingNextButtonStep[step].label === bookingNextButtonSubmitStep
    ) {
      console.log(warrantBookingInput);
    } else {
      setStep((step + 1) as BookingStep);
    }
  };

  return (
    <>
      {step === 1 && (
        <>
          <h1 className="text-red-600 font-bold mb-4">Warrant Booking</h1>
          <BookingTripButtonComponent
            tripButton={warrantBookingInput.tripType}
            setTripButton={handleTripType}
          />
          <BookingInformationInputComponent
            warrantBookingInput={warrantBookingInput}
            handleInputChange={handleInputChange}
            handleFieldChange={handleFieldChange}
            handleCheckboxEvent={handleCheckboxEvent}
          />
        </>
      )}
      {step === 2 && (
        <>
          <BreadcrumbsComponent
            items={newBookingBreadCrumbItems}
            activeId={2}
          />
          <FlightPreferenceListComponent
            warrantBookingInput={warrantBookingInput}
            handleInputChange={handleInputChange}
            handleFieldChange={handleFieldChange}
            handleCheckboxEvent={handleFlightPreferenceCheckboxEvent}
          />
        </>
      )}

      {step === 3 && (
        <>
          <BreadcrumbsComponent
            items={newBookingBreadCrumbItems}
            activeId={3}
          />
          <PassengersListComponent
            warrantBookingInput={warrantBookingInput}
            handlePassengerCheckboxEvent={handlePassengerCheckboxEvent}
          />
        </>
      )}
      {step === 4 && (
        <>
          <BreadcrumbsComponent
            items={newBookingBreadCrumbItems}
            activeId={4}
          />
          <RewviewComponent warrantBookingInput={warrantBookingInput} />
        </>
      )}
      <div className="text-right mb-4">
        <button
          type="submit"
          onClick={handleNextStep}
          className="px-10 py-2 bg-green-500 border-2 w-[auto] border-gray-500 cursor-pointer text-white rounded-3xl hover:bg-green-600"
        >
          {bookingNextButtonStep[step as BookingStep].label}
        </button>
      </div>
    </>
  );
};

export default BookingInputComponent;
