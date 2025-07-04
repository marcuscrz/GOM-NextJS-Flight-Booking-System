import React, { useState } from "react";
import { IPassengerData } from "../../DetailsTab/components/Types/Tabs";
import ArrowImage from "../assets/passengerstable-dropdown-arrow.png.png";

interface IManagePassengerTableProps {
  passengers: IPassengerData[];
}

const ManagePassengerTable = ({
  passengers = [],
}: IManagePassengerTableProps) => {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };  

  return (
    <div>
      <table className="table-fixed w-[92%] divide-y divide-gray-200 border-2 border-gray-100 mb-15">
        <thead className="text-left">
          <tr>
            <th className="w-[20%] p-4">ID Number</th>
            <th className="w-[42%] p-4">Passengers Full Name</th>
            <th className="w-[15%] p-4">Department</th>
            <th className="w-[22%] p-4">Email</th>
          </tr>
        </thead>

        <tbody>
          {passengers.map((passenger) => {
            const isExpanded = expandedIds.includes(passenger.idNumber);

            return (
              <React.Fragment key={passenger.idNumber}>
                <tr className="bg-[#f4f4f4]">
                  <td className="p-4 font-bold">{passenger.idNumber}</td>
                  <td className="p-4">{passenger.passengerFullName}</td>
                  <td className="p-4">{passenger.department}</td>
                  <td className="p-4">{passenger.email}</td>
                </tr>

                <tr
                  onClick={() => toggleExpand(passenger.idNumber)}
                  className="cursor-pointer text-red-600 font-bold text-[15px]"
                >
                  <td className="px-4 py-2 items-center w-[]">
                    <span className="flex items-center">
                      Family Members
                      <img
                        src={ArrowImage.src}
                        alt="Toggle"
                        className={`w-[7%] h-[7%] ml-1.5 transition-transform duration-200${
                          isExpanded ? "" : "transform -rotate-90"
                        }`}
                      />
                    </span>
                  </td>
                  <td className="px-4 py-2 flex items-center pl-[300px]">
                    Passenger Type
                  </td>
                </tr>

                {isExpanded &&
                  passenger.familyMembers.map((member, index) => (
                    <tr
                      key={index}
                      className="transition-all ease-in-out duration-300"
                    >
                      <td className="px-4 py-2 text-[15px] text-gray-700">
                        {member.familyMemberName}
                      </td>
                      <td className="p-4 py-2 text-[15px] text-gray-700 pl-[300px] ">
                        {member.passengerType}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePassengerTable;
