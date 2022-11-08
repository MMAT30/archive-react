import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const dataNewExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.liftExpenseForm(dataNewExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group m-3"> 
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            class="form-control"
          />
        </div>
        <div className="form-group m-3">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            class="form-control"
          />
        </div>
        <div className="form-group m-3">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            class="form-control"
          />
        </div>
        
      </form>
      <div>
          <button type="submit" className="btn btn-secondary shadow-lg m-3">Add New Expense</button>
          
        </div>

        <div>
        <button onClick={props.stopEditingFormHandler} type="button" className="btn btn-secondary shadow-lg m-3">Cancel</button>
        </div>
    </div>
  );
}

export default ExpenseForm;
