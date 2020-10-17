import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  return (
    <GlobalContext.Provider value={[transactions, setTransactions]}>
      {children}
    </GlobalContext.Provider>
  );
}
