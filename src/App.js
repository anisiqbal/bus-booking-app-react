import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Pricing from './components/Pricing';

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
          <Route exact path='/features' component={Features}></Route> 
          <Route exact path='/pricing' component={Pricing}></Route> 
        </Switch> 
        </div>
      </div>

      

    </Router>
  );
}

export default App;
