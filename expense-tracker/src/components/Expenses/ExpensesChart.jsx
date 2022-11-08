import Chart from "../Chart/Chart";
import Card from "../UI/Card";

function ExpensesChart(props) {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.filteredExpenses) {
    let expenseMonth = expense.date.getMonth()
    dataPoints[expenseMonth].value += expense.amount
  }

  

  return (
    <Card>
     
      <Chart dataPoints={dataPoints}/>
    </Card>
  );
}

export default ExpensesChart;
