import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Point of Sale System</h1>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
