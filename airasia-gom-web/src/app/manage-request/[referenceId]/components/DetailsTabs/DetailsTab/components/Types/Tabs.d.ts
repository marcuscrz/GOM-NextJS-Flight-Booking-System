export interface IFamilyMember {
  familyMemberName: string;
  passengerType: string;
}

export interface IPassengerData {
  idNumber: string;
  passengerFullName: string;
  department: string;
  email: string;
  familyMembers: IFamilyMember[];
}
