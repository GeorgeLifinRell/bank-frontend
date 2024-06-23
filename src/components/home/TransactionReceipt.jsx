import PropTypes from "prop-types";
import "../../styles/transactionReceipt.css";

const TransactionReceipt = ({ transactionId, balance }) => {
  return (
    <div className="transaction-receipt">
      <h2>Transaction Receipt</h2>
      <p>
        <strong>Transaction ID:</strong> {transactionId}
      </p>
      <p>
        <strong>New Balance:</strong> {balance}
      </p>
    </div>
  );
};

TransactionReceipt.propTypes = {
  transactionId: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default TransactionReceipt;
