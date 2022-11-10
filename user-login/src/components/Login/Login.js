import React, { useState, useEffect, useReducer, useContext } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/AuthContext';



const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {value: action.value, isValid: action.value.includes("@")}
  }
  return {value: "", IsValid: false}
}



const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {value: action.value, isValid: action.value.trim().length > 6}
  }
  return {value: "", IsValid: false}
}




const Login = (props) => {

  const cxt = useContext(AuthContext)

  // form
  const [formIsValid, setFormIsValid] = useState(false);

  // reducers
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: null})

  // states
  const {isValid: passwordIsValid}  = passwordState
  const {isValid: emailIsValid }= emailState




  
  useEffect(() => {

    const limit = setTimeout(() => {
      setFormIsValid(
        
        emailIsValid && passwordIsValid
      );
    }, 1000)
    
    // clean up
    return () => {
      clearTimeout(limit)
    }
  }, [emailIsValid, passwordIsValid])




  // email handlers
  const emailChangeHandler = (event) => {
    dispatchEmail({type: "EMAIL_INPUT", value: event.target.value})
  };

  // password handlers
  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "PASSWORD_INPUT", value: event.target.value})
  };


  // submit handlers
  const submitHandler = (event) => {
    event.preventDefault();
    cxt.onLogin(emailState.value, passwordState.value);
  };




  return (
    <Card >
      <form onSubmit={submitHandler}>

        <div className="m-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
            className={`form-control ${emailIsValid ? "is-valid" : "is-invalid"}`}
            
            required />
          <div className="valid-feedback">
            Email Looks Good!
          </div>
          <div className='invalid-feedback'>
            Valid Email Required!
          </div>
        </div>



        <div
          className="m-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
            className={`form-control ${passwordIsValid ? "is-valid" : "is-invalid"}`}
            required />
          <div className="valid-feedback">
            Password Looks Good!
          </div>
          <div className='invalid-feedback'>
            Password Greater Than 6 Characters Long Is Required!
          </div>
        </div>

        
        <div>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>


      </form>
    </Card>
  );
};

export default Login;
