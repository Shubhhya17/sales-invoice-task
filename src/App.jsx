
import React, { useState } from "react";
import SalesForm from "./components/SalesForm";
import SalesTable from "./components/SalesTable";
import SalesDashboard from "./components/SalesDashboard";
import EditSalesForm from "./components/SalesForm";

function App() {
  const [editingSale, setEditingSale] = useState(null);

  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">SALES 🧾 I N V O I C E 📊 M A N A G E M E N T</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        {editingSale ? (
          <EditSalesForm sale={editingSale} setEditingSale={setEditingSale} />
        ) : (
          <SalesForm />
        )}
      </div>
      <SalesTable setEditingSale={setEditingSale} />
      <SalesDashboard />
    </div>
  );
}

export default App;