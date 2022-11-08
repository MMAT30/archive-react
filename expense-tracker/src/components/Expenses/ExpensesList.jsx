import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return (
      <Card>
        <p>No Expenses For This Year</p>
      </Card>
    );
  }

  return (
    <ul>
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
