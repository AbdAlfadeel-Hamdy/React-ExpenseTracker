import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (expense) => {
    onAddExpense({ ...expense, id: Math.random().toString() });
    setIsEditing(false);
  };
  const stopEditing = () => setIsEditing(false);
  const startEditing = () => setIsEditing(true);
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
