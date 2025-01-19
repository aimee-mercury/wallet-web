import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import TransactionSummary from './TransactionSummary';

const Transactions = () => {
  const { transactions, addTransaction, deleteTransaction, budget, setBudget } = useWallet();
  const [formData, setFormData] = useState({ type: 'income', amount: '', category: '', account: 'bank' });
  const [toastMessage, setToastMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category.trim() || formData.amount <= 0) {
      setToastMessage('Please enter valid transaction details.');
      return;
    }

    if (formData.amount > budget) {
      setToastMessage('Budget exceeded! Please review your budget.');
      return;
    }

    addTransaction({ ...formData, amount: parseFloat(formData.amount), date: formData.date });
    setFormData({ type: 'income', amount: '', category: '', account: 'bank', date: '' });
    setToastMessage('Transaction added successfully!');
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Transactions</h2>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="p-4 bg-green-600 text-white rounded-md">{toastMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl space-y-6 border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Account</label>
            <select
              name="account"
              value={formData.account}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="bank">Bank Account</option>
              <option value="mobile">Mobile Money</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add Transaction
        </button>
      </form>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Transaction History</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-3 last:border-none"
            >
              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 rounded ${
                    transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {transaction.type}
                </span>
                <span>{transaction.category} ({transaction.account})</span>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}
                >
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </span>
                <button
                  onClick={() => deleteTransaction(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Transaction Summary (Chart) */}
      <TransactionSummary transactions={transactions} />
    </div>
  );
};

export default Transactions;
