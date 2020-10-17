import React from "react";

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$900.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">$350.00</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
