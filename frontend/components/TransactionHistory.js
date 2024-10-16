import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.date}: {transaction.amount} - Customer: {transaction.customer.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
