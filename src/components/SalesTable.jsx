import React, { useContext, useState } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesTable() {
  const { sales, deleteSale, editSale } = useContext(SalesContext);
  const [editingSale, setEditingSale] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (sale) => {
    setEditingSale(sale.id);
    setEditForm(sale);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editSale(editForm);
    setEditingSale(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Sales Records
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-50 text-gray-700 shadow-lg">
            <thead>
              <tr className="bg-blue-500 text-white text-lg">
                <th className="p-3">Customer</th>
                <th className="p-3">Product</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Price</th>
                <th className="p-3">Category</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sales.length > 0 ? (
                sales.map((sale) => (
                  <tr
                    key={sale.id}
                    className="hover:bg-gray-100 transition border-b"
                  >
                    {editingSale === sale.id ? (
                      <>
                        <td className="p-3">
                          <input
                            type="text"
                            name="customer"
                            value={editForm.customer}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            name="product"
                            value={editForm.product}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            name="quantity"
                            value={editForm.quantity}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            name="price"
                            value={editForm.price}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            name="category"
                            value={editForm.category}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                          />
                        </td>
                        <td className="p-3 flex space-x-2">
                          <button
                            onClick={handleEditSubmit}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingSale(null)}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-3">{sale.customer}</td>
                        <td className="p-3">{sale.product}</td>
                        <td className="p-3">{sale.quantity}</td>
                        <td className="p-3">${sale.price}</td>
                        <td className="p-3">{sale.category}</td>
                        <td className="p-3 flex space-x-2">
                          <button
                            onClick={() => handleEditClick(sale)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteSale(sale.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No sales records available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesTable;
