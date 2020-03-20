import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* all components  */}
        <div className="container pt-4">
        <Switch> 
          <Route exact path='/' component={Dashboard}></Route> 
          <Route exact path='/dashboard' component={Dashboard}></Route> 
          <Route exact path='/booking' component={Booking}></Route> 
          <Route exact path='/users' component={Users}></Route> 
        </Switch> 
        </div>
      </div>

      

    </Router>
  );
}

export default App;
