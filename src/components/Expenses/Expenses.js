import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      <ExpenseItem item={items[0]} />
      <ExpenseItem item={items[1]} />
      <ExpenseItem item={items[2]} />
      <ExpenseItem item={items[3]} />
    </Card>
  );
};
export default Expenses;
