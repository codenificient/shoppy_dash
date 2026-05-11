import React from "react";
import { Header } from "../components";
import { employeesData } from "../data/dummy";

const Employees = () => {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Employees" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Designation</th>
              <th className="py-3 px-4">Country</th>
              <th className="py-3 px-4">Hire Date</th>
              <th className="py-3 px-4">Reports To</th>
              <th className="py-3 px-4">ID</th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((row) => (
              <tr key={row.EmployeeID} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4">
                  <div className="flex items-center gap-3">
                    <img src={row.EmployeeImage} alt={row.Name} className="h-10 w-10 rounded-full object-cover" />
                    <span>{row.Name}</span>
                  </div>
                </td>
                <td className="py-2 px-4">{row.Title}</td>
                <td className="py-2 px-4">{row.Country}</td>
                <td className="py-2 px-4">{row.HireDate ? new Date(row.HireDate).toLocaleDateString() : ""}</td>
                <td className="py-2 px-4">{row.ReportsTo}</td>
                <td className="py-2 px-4">{row.EmployeeID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
