"use client";

import { useState, useEffect } from "react";
import { IWarrantBookingInput } from "./types/page";
import BookingTripButtonComponen from "./components/BookingTripButton";
import BookingInputComponent from "./components/BookingInput";
import { tripTypeEnum } from "./helper/tripTypeEnum";
import newBookingInputPreInput from "../test-data/newBookingPreInput.json";

export default function NewBooking() {

  const [warrantBookingInput, setWarrantBookingInput] =
    useState<IWarrantBookingInput>({
      tripType: "",
      origin: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      adult: 0,
      child: 0,
      infant: 0,
      cabinType: "",
      currency: "",
      expectedFare: 0,
      pukalNumber: 0,
      objectNumber: 0,
      departureBaggage: 0,
      departureEquipment: 0,
      returnBaggage: 0,
      returnEquipment: 0,
      travelAgency: [],
      returnFlightSchedules: [],
      departureFlightSchedules: [],
      isFlexibaleWithDates: false,
      remarks: "",
      passengers: []
    });

  useEffect(() => {
    setWarrantBookingInput({
      ...newBookingInputPreInput,
    });
  }, []);

  return (
    <div className="p-10 w-[80vw]  ml-[10vw]">
      <BookingInputComponent
        warrantBookingInput={warrantBookingInput}
        setWarrantBookingInput={setWarrantBookingInput}
      />
    </div>
  );
}
