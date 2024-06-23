import Cookies from "js-cookie";
import { SERVER_URL } from "../../utils/utils";
import { useState } from "react";
import TransactionReceipt from "./TransactionReceipt.jsx";
import "../../styles/styles.css"; // Import unified styles

export const Withdraw = () => {
  const [showTransactionReceipt, setShowTransactionReceipt] = useState({
    visibility: false,
    transactionId: "",
    balance: "",
  });

  const doWithdraw = async (event) => {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number-ip").value;
    const amount = document.getElementById("amount-ip").value;
    const token = Cookies.get("jwt");
    const errorEl = document.getElementById("error-message");

    if (!accountNumber || !amount) {
      alert("Please fill all the fields");
      return;
    }
    if (!token) {
      alert("Login again to continue!");
      return;
    }

    const requestData = {
      accountNumber: accountNumber,
      amount: amount,
    };

    try {
      const response = await fetch(`${SERVER_URL}/account/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });
      const responseBody = await response.json();
      if (!response.ok) {
        errorEl.textContent = responseBody.errorMessage;
        return;
      }
      alert("Withdrawal Success!");
      setShowTransactionReceipt({
        visibility: true,
        transactionId: responseBody.transactionId,
        balance: responseBody.balance,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={doWithdraw}>
        <p id="error-message" className="error-message"></p>
        <div className="form-group">
          <label htmlFor="account-number-ip">Beneficiary Account Number</label>
          <input
            type="text"
            name="account-number-ip"
            id="account-number-ip"
            placeholder="Account Number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount-ip">Amount</label>
          <input
            type="number"
            name="amount-ip"
            id="amount-ip"
            placeholder="Amount"
            required
          />
        </div>
        <button type="submit">Withdraw Now</button>
        {showTransactionReceipt.visibility && (
          <TransactionReceipt
            transactionId={showTransactionReceipt.transactionId}
            balance={showTransactionReceipt.balance}
          />
        )}
      </form>
    </div>
  );
};
