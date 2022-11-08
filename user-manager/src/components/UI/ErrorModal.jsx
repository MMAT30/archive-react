import Card from "./Card";

const ErrorModal = (props) => {

  const closeButtonHandler = () => {
    props.setError(null)
  }

  return (
    <Card>
        <div className="container text-center">
      <div className="h2 mb-3">
        {props.error.title}
      </div>
      <div className="mb-3">
        {props.error.message}
      </div>
      <div>
        <button onClick={closeButtonHandler} type="submit" className="btn btn-secondary">
          Close
        </button>
      </div>
      </div>
    </Card>
  );
};

export default ErrorModal;
