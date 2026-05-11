import React from "react";
import { Header } from "../components";
import { ordersData } from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Orders" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Item</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Location</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((row) => (
              <tr key={row.OrderID} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4">
                  <img src={row.ProductImage} alt="product" className="h-14 w-14 rounded-xl object-cover" />
                </td>
                <td className="py-2 px-4">{row.OrderItems}</td>
                <td className="py-2 px-4">{row.CustomerName}</td>
                <td className="py-2 px-4">${row.TotalAmount?.toLocaleString()}</td>
                <td className="py-2 px-4">
                  <span
                    className="text-white py-1 px-3 capitalize rounded-2xl text-xs"
                    style={{ background: row.StatusBg }}
                  >
                    {row.Status}
                  </span>
                </td>
                <td className="py-2 px-4">{row.OrderID}</td>
                <td className="py-2 px-4">{row.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
