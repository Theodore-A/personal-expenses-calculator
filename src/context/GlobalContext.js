import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: +700 },
    { id: 2, text: "Payment", amount: -30 },
    { id: 3, text: "Freelance", amount: +200 },
    { id: 4, text: "Flexing", amount: -500 },
  ]);

  return (
    <GlobalContext.Provider value={[transactions, setTransactions]}>
      {children}
    </GlobalContext.Provider>
  );
}
