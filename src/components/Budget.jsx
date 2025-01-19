import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const Budget = () => {
  const { budget, setBudget } = useWallet();
  const [newBudget, setNewBudget] = useState(budget || ''); // Start with an empty value if no budget is set

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const updateBudget = () => {
    const parsedBudget = parseFloat(newBudget);
    if (!isNaN(parsedBudget) && parsedBudget > 0) {
      setBudget(parsedBudget);
    } else {
      alert('Please enter a valid positive number for the budget.');
    }
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">Manage Your Budget</h2>
      <p className="text-lg text-center text-gray-600">
        Easily set and track your budget to stay on top of your finances.
      </p>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-xl text-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">Your Current Budget</h3>
        <div className="flex flex-col items-center mb-6">
          {budget ? (
            <p className="text-4xl font-bold text-yellow-300">${budget.toFixed(2)}</p>
          ) : (
            <p className="text-xl">No budget set yet.</p>
          )}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <input
            type="number"
            value={newBudget}
            onChange={handleBudgetChange}
            placeholder="Enter your budget"
            className="w-full max-w-md p-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-sm"
          />
          <button
            onClick={updateBudget}
            className="py-3 px-8 bg-yellow-400 text-indigo-900 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 focus:ring-4 focus:ring-yellow-300 shadow-lg"
          >
            Set Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
