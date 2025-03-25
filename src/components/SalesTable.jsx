// src/components/SalesTable.jsx
import React, { useContext } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesTable({ setEditingSale }) {
  const { sales, deleteSale } = useContext(SalesContext);

  return (
    <div className="mt-6 w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Sales Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border p-3">Customer</th>
              <th className="border p-3">Product</th>
              <th className="border p-3">Quantity</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sales.length > 0 ? (
              sales.map((sale) => (
                <tr key={sale.id} className="text-center border-t">
                  <td className="border p-3">{sale.customer}</td>
                  <td className="border p-3">{sale.product}</td>
                  <td className="border p-3">{sale.quantity}</td>
                  <td className="border p-3">${sale.price}</td>
                  <td className="border p-3">{sale.category}</td>
                  <td className="border p-3 flex justify-center space-x-2">
                    <button onClick={() => setEditingSale(sale)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                    <button onClick={() => deleteSale(sale.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">No sales records available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Table</button>
    </div>
  );
}

export default SalesTable;