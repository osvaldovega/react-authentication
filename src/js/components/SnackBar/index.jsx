import React, { Component } from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";

const SnackBar = ({ isOpen, onClose, message, autoHide = 10000 }) => (
  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    open={isOpen}
    onClose={onClose}
    autoHideDuration={autoHide}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={<span id="message-id">{message}</span>}
  />
);

SnackBar.propTypes = {
  autoHide: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SnackBar;
