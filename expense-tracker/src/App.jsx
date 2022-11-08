import {useState} from "react"
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let TEMP_EXPENSES = [
  {id: 1, title: "Car Insurance", amount: 123.123, date: new Date(2021, 1,1)},
  {id: 2, title: "Car Payment", amount: 234.234, date: new Date(2021, 1,2)},
  {id: 3, title: "Spotify", amount: 345.345, date: new Date(2021, 1,3)},
  {id: 4, title: "Netflix", amount: 456.456, date: new Date(2021, 1,4)},
]

function App() {
  const [expenses, addExpenses] = useState(TEMP_EXPENSES)


  const liftNewExpense = (dataNewExpense) => {
    addExpenses((prevState) => {
      return [...prevState, dataNewExpense]
    })
  }

  return (
    <div className="container text-center">
      <div className="column">
      <NewExpense liftAddExpense={liftNewExpense}/>
      <Expenses expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
