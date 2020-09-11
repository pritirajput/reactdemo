import React from 'react';
import logo from '..//logo.svg';
import '..//App.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> 
              <ul>
            <li>
            < Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/AboutUs">AboutUs</Link>
            </li>
          </ul>
                  
            <p>hallo react</p>
            </h1>    
  
        </header>
      </div>
    );
  }
  
  export default Home;