import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/dashboard">Home</Link>
              <Link className="nav-item nav-link" to="/booking">Booking</Link>
              <Link className="nav-item nav-link" to="/users">Users</Link> 
              <Link className="nav-item nav-link" to="/vehicles">Vehicles</Link>
              <Link className="nav-item nav-link" to="/routes">Routes</Link>
              <Link className="nav-item nav-link" to="/schedule">Schedule</Link>
            </div>
        </div>
    </nav>
  );
}

export default Header;
