
import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import Navigation from './Navigation';


const MainHeader = (props) => {

  const cxt = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-lg">
    <div className="container-fluid">
      <p className="navbar-brand">A Typical Page</p>
      <Navigation onLogout={cxt.onLogout} />
    </div>
  </nav>
    
  );
};

export default MainHeader;
