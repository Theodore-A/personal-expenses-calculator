import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const [transactions, setTransactions] = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
