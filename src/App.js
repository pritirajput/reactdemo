import React from 'react';
import logo from './logo.svg';
/*import './App.css';*/
import './style.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './assests/Home';

    

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Footer/> 
       <Switch>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




