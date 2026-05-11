import React from "react";
import { Header } from "../components";
import { customersData } from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Customers" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Project</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Weeks</th>
              <th className="py-3 px-4">Budget</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">ID</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((row) => (
              <tr key={row.CustomerID} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4">
                  <div className="flex items-center gap-3">
                    <img src={row.CustomerImage} alt={row.CustomerName} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium">{row.CustomerName}</p>
                      <p className="text-xs text-gray-400">{row.CustomerEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4">{row.ProjectName}</td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full inline-block" style={{ background: row.StatusBg }} />
                    <span>{row.Status}</span>
                  </div>
                </td>
                <td className="py-2 px-4">{row.Weeks}</td>
                <td className="py-2 px-4">{row.Budget}</td>
                <td className="py-2 px-4">{row.Location}</td>
                <td className="py-2 px-4">{row.CustomerID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
