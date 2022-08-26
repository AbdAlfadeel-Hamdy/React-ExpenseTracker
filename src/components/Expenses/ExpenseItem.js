import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ item }) => {
  const formatter = new Intl.NumberFormat("eg-US", {
    style: "currency",
    currency: "USD",
  });
  const amount = formatter.format(item.amount);

  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <h2>{item.title}</h2>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
};

export default ExpenseItem;
