// src/context/SalesContext.jsx
import React, { createContext, useState } from "react";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const addSale = (sale) => {
    setSales([...sales, { ...sale, id: Date.now() }]);
  };

  return (
    <SalesContext.Provider value={{ sales, addSale }}>
      {children}
    </SalesContext.Provider>
  );
};
export default SalesContext;
