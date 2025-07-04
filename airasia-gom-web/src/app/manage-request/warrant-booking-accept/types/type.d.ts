export interface IWarrantBookingDetails {
  origin: string;
  originShortName: string;
  destination: string;
  destinationShortName: string;
  departureDate: string;
  isFlexibaleWithDates: boolean;
  returnDate: string;
  departDepartureTime: string,
  departArrivalTime: string,
  departTravelTime: string,
  returnDepartureTime: string,
  returnArrivalTime: string,
  returnTravelTime: string,
  adult: number;
  child: number;
  infant: number;
  guest: number;
  cabinType: string;
  currency: string;
  expectedFare: number;
  departureBaggage: number;
  departureEquipment: number;
  returnBaggage: number;
  returnEquipment: number;
  planeModel: string;
  planeNumber: string;
}
export interface IFareDetails {
  baseFare: number;
  taxesFeesSurcharges: number;
  addOns: number;
  agencyFees: number;
  currency: string; 
}