import { useState } from "react";
import { Deposit } from "../components/home/Deposit";
import { Withdraw } from "../components/home/Withdraw";
import "../default.css";
import "../styles/styles.css";

const Home = () => {
  const [showDepositComponent, setShowDepositComponent] = useState(false);
  const [showWithdrawComponent, setShowWithdrawComponent] = useState(false);

  const handleDeposit = () => {
    setShowWithdrawComponent(false);
    setShowDepositComponent(true);
  };

  const handleWithdraw = () => {
    setShowDepositComponent(false);
    setShowWithdrawComponent(true);
  };

  return (
    <>
      <div>
        <h2>Home Page</h2>
        {/* <Typography>Home Page</Typography> */}
        <p>Welcome to the Home Page!</p>
      </div>

      <div className="button-group">
        <button className="button clickable" onClick={handleDeposit}>
          Deposit
        </button>
        <button className="button clickable" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>
      <div>
        {showDepositComponent && <Deposit />}
        {showWithdrawComponent && <Withdraw />}
      </div>
    </>
  );
};

export default Home;
