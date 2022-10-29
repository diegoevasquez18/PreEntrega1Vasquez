import React, { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alerta = ({ msg }) => {
  if (msg === "") return;

  return (
    <div>
      <Stack
        sx={{ width: "25%", bottom: 100, right: 10, position: "absolute" }}
        spacing={2}
      >
        <Alert severity="success">{msg}</Alert>
      </Stack>
    </div>
  );
};
const AlertContext = createContext();
export const useAlert = () => useContext(AlertContext);

export const AlertContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const setAlert = (msg) => {
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };
  return (
    <AlertContext.Provider value={{ setAlert }}>
      <Alerta msg={message} />
      {children}
    </AlertContext.Provider>
  );
};
