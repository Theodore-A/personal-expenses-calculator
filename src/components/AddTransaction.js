import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTransaction = () => {
  const [transactions, setTransactions] = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitTransaction = (e) => {
    e.preventDefault();

    setTransactions((preTransactions) => [
      ...preTransactions,
      { text: text, amount: amount, id: Math.random() * 1000 },
    ]);

    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            onChange={textHandler}
            value={text}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (Negative = expense, Positive = income)
          </label>
          <input
            type="number"
            onChange={amountHandler}
            value={amount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
