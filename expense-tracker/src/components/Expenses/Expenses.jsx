import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");

  const liftExpenseFilter = (dataExpenseFilter) => {
    setExpenseFilter(dataExpenseFilter);
  
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <div>
      <ExpenseFilter
        liftExpenseFilter={liftExpenseFilter}
        expenseFilter={expenseFilter}
      />

      <ExpensesChart filteredExpenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </div>
  );
}

export default Expenses;
