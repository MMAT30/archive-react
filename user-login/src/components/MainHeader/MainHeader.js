import Navigation from './Navigation';


const MainHeader = (props) => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top bg-light shadow-lg">
    <div class="container-fluid">
      <p class="navbar-brand">A Typical Page</p>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </div>
  </nav>
    
  );
};

export default MainHeader;
