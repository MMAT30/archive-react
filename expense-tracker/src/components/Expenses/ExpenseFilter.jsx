import Card from "../UI/Card";

function ExpenseFilter(props) {
  const expenseFilterHandler = (event) => {
    props.liftExpenseFilter(event.target.value);
  };

  return (
    <Card>
      <label>Fliter By Year</label>
      <br />
      <select value={props.expenseFilter} onChange={expenseFilterHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </Card>
  );
}

export default ExpenseFilter;
