import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const Report = () => {
  const { transactions } = useWallet();
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleGenerateReport = () => {
    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);

    // Filter transactions based on the selected date range
    const filtered = transactions.filter((t) => {
      const transactionDate = new Date(t.date); // Ensure we're using the date field
      return transactionDate >= startDate && transactionDate <= endDate;
    });

    setFilteredTransactions(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Generate Report</h2>

      {/* Date Range Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Start Date</label>
          <input
            type="date"
            name="start"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="w-full border rounded p-3 text-gray-700"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">End Date</label>
          <input
            type="date"
            name="end"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="w-full border rounded p-3 text-gray-700"
          />
        </div>
      </div>

      {/* Generate Report Button */}
      <button
        onClick={handleGenerateReport}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Generate Report
      </button>

      {/* Report Display */}
      {filteredTransactions.length > 0 && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Transactions Report</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left text-gray-600">Category</th>
                <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                <th className="px-4 py-2 text-left text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-gray-700">{transaction.category}</td>
                  <td className={`px-4 py-2 ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                  </td>
                  <td className="px-4 py-2 text-gray-500">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* No Transactions Message */}
      {filteredTransactions.length === 0 && (
        <div className="mt-6 bg-yellow-100 text-yellow-700 p-4 rounded-md">
          <p className="font-medium">No transactions found for the selected date range.</p>
        </div>
      )}
    </div>
  );
};

export default Report;
