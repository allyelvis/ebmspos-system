import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('/api/customers');
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  const handleAddCustomer = async () => {
    const response = await axios.post('/api/customers', newCustomer);
    setCustomers([...customers, response.data]);
    setNewCustomer({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Customer Management</h2>
      <input type="text" placeholder="Name" value={newCustomer.name} onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })} />
      <input type="email" placeholder="Email" value={newCustomer.email} onChange={e => setNewCustomer({ ...newCustomer, email: e.target.value })} />
      <button onClick={handleAddCustomer}>Add Customer</button>

      <h3>Customer List</h3>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name} ({customer.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerManagement;
