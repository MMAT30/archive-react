

const Card = (props) => {
  return (
    <div className={`card shadow-lg border-0 text-center m-5 p-5 ${props.className}`}>{props.children}</div>
  );
};

export default Card;
