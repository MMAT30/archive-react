import React, { useContext }  from "react";
import AuthContext from "../../store/AuthContext";


const Navigation = (props) => {

  const ctx = useContext(AuthContext)

  return (
        <div>
        <ul className="navbar-nav">
          {ctx.isLoggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li className="nav-item">
              <button className="btn btn-warning" onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
     
  );
};

export default Navigation;
