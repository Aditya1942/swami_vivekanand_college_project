import React, { createContext, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const MsgContext = createContext({});

const AlertMsg = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [Type, setType] = useState("success");
  const [Message, setMessage] = useState("");

  const Show = (type = "success", message = "This is a success message!") => {
    setOpen(true);
    setType(type);
    setMessage(message);
  };
  const success = (message = "This is a success message!") => {
    Show("success", message);
  };
  const error = (message = "This is an error message!") => {
    Show("error", message);
  };
  const warning = (message = "This is a warning message!") => {
    Show("warning", message);
  };
  const info = (message = "This is an info message!") => {
    Show("info", message);
  };

  const Hide = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <MsgContext.Provider value={{ Show, Hide, success, error, warning, info }}>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={Hide}>
          <>
            <Alert onClose={Hide} severity={Type}>
              {Message}
            </Alert>
          </>
        </Snackbar>
      </div>
      {children}
    </MsgContext.Provider>
  );
};

export default AlertMsg;
