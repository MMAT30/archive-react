
function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", {month: "long"})
    const day = props.date.toLocaleString("en-US", {day: "2-digit"})
    const year = props.date.getFullYear()

    return (
        <p className="card-text">
            {month} {day} {year}
        </p>
    )
}

export default ExpenseDate