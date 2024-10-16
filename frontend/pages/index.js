import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the POS System</h1>
      <nav>
        <ul>
          <li><Link href="/inventory">Manage Inventory</Link></li>
          <li><Link href="/transactions">Transaction History</Link></li>
          <!-- Add more links as needed -->
        </ul>
      </nav>
    </div>
  );
};

export default Home;
