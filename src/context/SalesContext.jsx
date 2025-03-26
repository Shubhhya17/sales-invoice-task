import React, { createContext, useState } from "react";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  // Add a new sale
  const addSale = (sale) => {
    setSales([...sales, { ...sale, id: Date.now() }]);
  };

  // Delete a sale by ID
  const deleteSale = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  // Edit an existing sale
  const editSale = (updatedSale) => {
    setSales(
      sales.map((sale) => (sale.id === updatedSale.id ? updatedSale : sale))
    );
  };

  return (
    <SalesContext.Provider value={{ sales, addSale, deleteSale, editSale }}>
      {children}
    </SalesContext.Provider>
  );
};

export default SalesContext;
