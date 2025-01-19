import React, { createContext, useContext, useState } from 'react';

// Create the context
export const TransactionContext = createContext();

// Custom hook to use the context
export const useWallet = () => useContext(TransactionContext);

// WalletProvider to wrap the app and provide the context values
export const WalletProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]); // Default empty array
  const [budget, setBudget] = useState(700000); // Set your initial budget (default)

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransaction = (index) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, budget, setBudget }}>
      {children}
    </TransactionContext.Provider>
  );
};
