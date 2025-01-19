import React from 'react';
import { useWallet } from '../context/WalletContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionSummary = ({ transactions }) => {
  // Calculate total income and expenses
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Data for the chart
  const chartData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Amount',
        data: [totalIncome, totalExpense],
        backgroundColor: ['#4caf50', '#f44336'], // Green for income, red for expense
        borderColor: ['#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Transaction Summary</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">Total Income:</span>
          <span className="text-lg text-green-600">${totalIncome.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-red-600">Total Expense:</span>
          <span className="text-lg text-red-600">${totalExpense.toFixed(2)}</span>
        </div>
      </div>

      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default TransactionSummary;
