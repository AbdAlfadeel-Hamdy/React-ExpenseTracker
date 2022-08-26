import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => setTitle(e.target.value);
  const amountHandler = (e) => setAmount(e.target.value);
  const dateHandler = (e) => setDate(e.target.value);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData({ title, amount: +amount, date: new Date(date) });
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
