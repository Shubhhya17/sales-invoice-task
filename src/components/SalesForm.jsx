import React, { useState, useContext } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesForm() {
  const { addSale } = useContext(SalesContext);
  const [form, setForm] = useState({
    customer: "",
    product: "",
    quantity: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customer || !form.product || form.quantity <= 0 || form.price <= 0) {
      alert("Please enter valid details");
      return;
    }
    addSale(form);
    setForm({ customer: "", product: "", quantity: "", price: "", category: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Add New Sale</h2>
        <input type="text" name="customer" value={form.customer} onChange={handleChange} placeholder="Customer Name" className="border p-3 w-full mb-2 rounded-md" />
        <input type="text" name="product" value={form.product} onChange={handleChange} placeholder="Product" className="border p-3 w-full mb-2 rounded-md" />
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" className="border p-3 w-full mb-2 rounded-md" />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-3 w-full mb-2 rounded-md" />
        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border p-3 w-full mb-2 rounded-md" />
        <div className="mt-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Add Sale
          </button>
        </div>
      </form>
    </div>
  );
}

export default SalesForm;
