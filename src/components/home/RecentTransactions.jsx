import { useEffect, useState } from 'react';
import { SERVER_URL } from '../../utils/utils';
import Cookies from 'js-cookie';
import '../../styles/styles.css'; // Import unified styles

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/account/recent-transactions`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('jwt')}`,
          },
        });
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error('Error fetching recent transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Transaction ID: {transaction.id}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
