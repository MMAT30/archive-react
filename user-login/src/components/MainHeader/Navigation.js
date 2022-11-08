

const Navigation = (props) => {
  return (
    <div>
      <ul className="navbar-nav">
        {props.isLoggedIn && (
          <li className="nav-item">
            <a class="nav-link" href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li className="nav-item">
            <a class="nav-link" href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li className="nav-item">
            <button class="btn btn-warning" onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
