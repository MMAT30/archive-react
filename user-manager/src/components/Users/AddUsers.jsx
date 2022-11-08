import { useRef } from "react";
import Card from "../UI/Card";


const AddUsers = (props) => {

  const username = useRef();
  const age = useRef();
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  





  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = username.current.value
    const enteredAge = age.current.value

    // checking and setting error
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        props.setError({title: "Username / Age Error", message: "Username Or Age Is Empty!"})
        return
    }
    else if (+enteredAge < 0) {
        props.setError({title: "Age Input Error", message: "Age Is Less Than Zero!"})
        return
    }

    // lifting data
    props.liftUserHandler(enteredUsername, enteredAge)

    // resetting input fields
    username.current.value = ""
    age.current.value = ""

  };

  



  return (
    <Card>
      <div className="container text-center w-50">
        <form onSubmit={addUserHandler}>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>

              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
    
                ref={username}
              />
            </div>
          </div>

          <div className="col mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="form-control"
          
              ref={age}
            />
          </div>

          <div className="col">
            <button type="submit" className="btn btn-secondary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AddUsers;
