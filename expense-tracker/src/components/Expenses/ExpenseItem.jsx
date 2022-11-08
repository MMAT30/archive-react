import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {


  const deleteHandler = (prevState) => {
 
    console.log(props.key)
  }

  return (
    <Card>
      <p className="card-title">{props.title}</p>
      <ExpenseDate date={props.date} />
      <p className="card-text">{props.amount}</p>
      <button onClick={deleteHandler} className="btn btn-secondary shadow-lg">Delete</button>

    </Card>
  );
}

export default ExpenseItem;
