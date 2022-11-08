
function Card(props) {
    return (
        <div className="card border-0 shadow-lg m-3">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card