function Card(props) {
  return (
    <div className="card border-0 shadow-lg m-3 p-3">{props.children}</div>
  );
}

export default Card;
