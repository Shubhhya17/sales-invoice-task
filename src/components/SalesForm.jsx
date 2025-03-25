import React, { useState, useContext } from "react";
import { SalesContext } from "../context/SalesContext";

function SalesForm() {
  const { addSale } = useContext(SalesContext);
  const [form, setForm] = useState({ customer: "", product: "", quantity: "", price: "", category: "" });

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
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded w-96 text-center">
      <input type="text" name="customer" value={form.customer} onChange={handleChange} placeholder="Customer Name" required className="border p-2 w-full" />
      <input type="text" name="product" value={form.product} onChange={handleChange} placeholder="Product" required className="border p-2 w-full" />
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required className="border p-2 w-full" />
      <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required className="border p-2 w-full" />
      <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Sale</button>
    </form>
  );
}

export default SalesForm;