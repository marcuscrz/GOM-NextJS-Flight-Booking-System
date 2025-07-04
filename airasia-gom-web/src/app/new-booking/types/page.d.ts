export interface IPassengers {
  id: string;
  familyMembers: string[];
}
export interface IWarrantBookingInput {
  tripType: string;
  origin?: string;
  destination?: string;
  departureDate?: string;
  returnDate?: string;
  adult?: number;
  child?: number;
  infant?: number;
  cabinType?: string;
  currency?: string;
  expectedFare?: number;
  pukalNumber?: number;
  objectNumber?: number;
  departureBaggage?: number;
  departureEquipment?: number;
  returnBaggage?: number;
  returnEquipment?: number;
  travelAgency: number[];
  returnFlightSchedules: string[];
  departureFlightSchedules: string[];
  isFlexibaleWithDates: boolean;
  remarks: string;
  passengers: IPassengers[];
}

export type WarrantBookingCheckedFlightKey =
  | "departureFlightSchedules"
  | "returnFlightSchedules";
export type WarrantBookingCheckedTravelAgencyKey = "travelAgency";

export interface IWarrantBookingPassenger {
  id: string;
  name: string;
  email: string;
  userId: string;
  familyRefId?: string;
}
