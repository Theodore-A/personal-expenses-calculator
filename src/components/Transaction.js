import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Transaction({ text, amount, transaction }) {
  const [transactions, setTransactions] = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  const deleteHandler = () => {
    setTransactions(transactions.filter((item) => item.id !== transaction.id));
  };

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={deleteHandler} className="delete-btn">
        x
      </button>
    </li>
  );
}

export default Transaction;
