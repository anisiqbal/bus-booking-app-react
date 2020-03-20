import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link active" to="/dashboard">Home</Link>
              <Link class="nav-item nav-link" to="/booking">Booking</Link>
              <Link class="nav-item nav-link" to="/users">Users</Link>
            </div>
        </div>
    </nav>
  );
}

export default Header;
