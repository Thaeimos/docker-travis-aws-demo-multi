import logo from './logo.svg';
import './App.css';
import React, { component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Otherpage</Link>
          <div>
            <Route exact path="/" component={Fib} />
            <Route exact path="/otherpage" component={OtherPage} />
          </div>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
