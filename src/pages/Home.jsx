import { useState } from "react";
import { Deposit } from "../components/home/Deposit";
import { Withdraw } from "../components/home/Withdraw";
import RecentTransactions from "../components/home/RecentTransactions";
import "../styles/styles.css";

const Home = () => {
  const [showComponent, setShowComponent] = useState("");

  const handleComponentDisplay = (component) => {
    setShowComponent(component);
  };

  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <div className="button-group">
        <button
          className="button clickable"
          onClick={() => handleComponentDisplay("deposit")}
        >
          Deposit
        </button>
        <button
          className="button clickable"
          onClick={() => handleComponentDisplay("withdraw")}
        >
          Withdraw
        </button>
        <button
          className="button clickable"
          onClick={() => handleComponentDisplay("recentTransactions")}
        >
          Get recent transactions
        </button>
      </div>
      <div>
        {showComponent === "deposit" && <Deposit />}
        {showComponent === "withdraw" && <Withdraw />}
        {showComponent === "recentTransactions" && <RecentTransactions />}
      </div>
    </div>
  );
};

export default Home;
