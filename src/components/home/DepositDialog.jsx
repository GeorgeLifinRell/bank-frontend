import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const DepositDialog = ({ open, onClose, onConfirm }) => {
  const [amount, setAmount] = React.useState('');

  const handleConfirm = () => {
    onConfirm(amount);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deposit</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the amount you wish to deposit.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

DepositDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.bool.isRequired,
    onConfirm: PropTypes.bool.isRequired
};

export default DepositDialog;
