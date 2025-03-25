import React, { useContext } from "react";
import { SalesContext } from "../context/SalesContext";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SalesDashboard() {
  const { sales } = useContext(SalesContext);

  const productSales = sales.reduce((acc, sale) => {
    acc[sale.product] = (acc[sale.product] || 0) + sale.quantity;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(productSales),
    datasets: [
      {
        label: "Most Sold Products",
        data: Object.values(productSales),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-6 w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Dashboard</h2>
      <Bar data={data} />
    </div>
  );
}

export default SalesDashboard;