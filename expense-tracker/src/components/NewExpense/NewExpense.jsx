import {useState} from "react"
import Card from "../UI/Card"
import ExpenseForm from "./ExpenseForm"


function NewExpense(props) {

    const [buttonTrigger, setButtonTrigger] = useState(false)
    const liftExpenseForm = (dataExpenseForm) => {
        const expenseData = {
            ...dataExpenseForm,
            id: Math.random().toString()
        }

        props.liftAddExpense(expenseData)
    }   

    const startEditingFormHandler = (prevState) => {
        setButtonTrigger(true)
    }

    const stopEditingFormHandler = (prevState) => {
        setButtonTrigger(false)
    }

    if (buttonTrigger === false) {
        return (
            <div>
                <Card>
                    <button onClick={startEditingFormHandler} className="btn btn-secondary shadow-lg">Create New Expense</button>
                </Card>
            </div>
        )
    }



    return (
        <div>
            <Card>
                <ExpenseForm liftExpenseForm={liftExpenseForm} stopEditingFormHandler={stopEditingFormHandler}/>
            </Card>
        </div>
    )
}

export default NewExpense