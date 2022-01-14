import * as React from 'react'
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { IToaster } from "../../models/toaster";
import { hideToaster } from '../../../redux/layoutSlice';

const Toaster: React.FC<IToaster> = (props) => {
  const { message, show, status } = props;
  const dispatch = useDispatch();
  
  const handleClose = () => {
    dispatch(
      hideToaster()
    );
  }

  return (
    <Snackbar
    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    autoHideDuration={5000}
    open={show}
    onClose={handleClose}
    message={message}
    sx={{ marginBottom: 50 }}
  >
    {status && (
      <MuiAlert
        sx={{ width: "100%" }}
        elevation={4}
        variant="filled"
        severity={status}
      >
        {message}
      </MuiAlert>
    )}
  </Snackbar>

  );
};

export default Toaster;
