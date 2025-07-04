export interface ISearchParams {
  origin?: string;
  destination?: string;
  flightNumber?: string;
  referenceId?: string;
  departureDate?: string;
  tripType?: string;
  status?: string;
}

export interface IManageRequestData {
  id?: string;
  referenceId?: number;
  bookingStatus?: string;
  requestor?: string;
  dateRequested?: string;
  warrantStatus?: string;
  status?: string;
  totalPassenger?: number;
  passengerType?: string;
  cabinType?: string;
  flightNumber?: string;
  departureDate?: string;
  returnDate?: string;
  tripType?: string;
  origin?: string;
  destination?: string;
  departureBaggageWeight?: number;
  departureSportEquipmentWeight?: number;
  returnBaggageWeight?: number;
  returnSportEquipmentWeight?: number;
  pukalNumber?: number;
  objectNumber?: number;
  travelAgencies?: string;
  remarks?: string;
}

export interface IWarrantData {
  warrantNumber: string;
  warrantUpdateDate: string;
  warrantStatus: string;
}
