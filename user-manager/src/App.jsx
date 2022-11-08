import React, {useState, Fragment} from "react";
import ErrorModal from "./components/UI/ErrorModal";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

 

  const liftUserHandler = (username, age) => {
    setUsers((preState) => [...preState, {id: Math.random().toString(),username: username, age: age}])
  }


  if (error !== null) {
    return (
        <Fragment>
          <ErrorModal setError={setError} error={error}/>
          {console.log(error)}
        </Fragment>
    )
  } 



  return (
    <Fragment>
      <AddUsers  setError={setError} liftUserHandler={liftUserHandler}/>
      <UserList users={users}/>
    </Fragment>
  );
};

export default App;
