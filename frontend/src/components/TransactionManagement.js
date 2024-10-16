import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionManagement = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ customerId: '', productId: '', quantity: 1 });

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    };
    fetchTransactions();
  }, []);

  const handleAddTransaction = async () => {
    const response = await axios.post('/api/transactions', newTransaction);
    setTransactions([...transactions, response.data]);
    setNewTransaction({ customerId: '', productId: '', quantity: 1 });
  };

  return (
    <div>
      <h2>Transaction Management</h2>
      <input type="text" placeholder="Customer ID" value={newTransaction.customerId} onChange={e => setNewTransaction({ ...newTransaction, customerId: e.target.value })} />
      <input type="text" placeholder="Product ID" value={newTransaction.productId} onChange={e => setNewTransaction({ ...newTransaction, productId: e.target.value })} />
      <input type="number" placeholder="Quantity" value={newTransaction.quantity} onChange={e => setNewTransaction({ ...newTransaction, quantity: e.target.value })} />
      <button onClick={handleAddTransaction}>Add Transaction</button>

      <h3>Transaction History</h3>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>Product {transaction.productId} (Qty: {transaction.quantity}) - Customer {transaction.customerId}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionManagement;
