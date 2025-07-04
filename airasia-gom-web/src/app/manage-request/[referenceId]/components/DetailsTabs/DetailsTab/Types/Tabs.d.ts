export interface IFamilyMember {
  familyMemberName: string;
  PassengerType: string;
}

export interface IPassengerData {
  idNumber: string;
  passengerFullName?: string;
  department: string;
  email: string;
  familyMembers: IFamilyMember[];
}

export interface IFLightSchedule{
  id?: string
  flightName?: string
  model?: string
  departureTime?: string
  arrivalTime?: string
  duration?: string
  transitTime?: string
  stop?: number;
  transitLocation?: string
}

export interface IFlightPreferance {
  origin: string;
  originShortName: string;
  destination: string;
  destinationShortName: string;
  departureDate: string; 
  returnDate: string;
  departureSchedule: IFlightSchedule[];
  returnSchedule: IFlightSchedule[];
}

export interface IBookingLogEntry {
  timestamp?: string;
  type?: string;
  message?: string;
}