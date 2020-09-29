import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './assests/Home';
import Contact from './assests/Contact';
import Livecameras from './assests/Livecameras';
import News from './assests/News';
import Photos from './assests/Photos';
import Single from './assests/Single';
    

export default function App() {
  return (
    
    
      <Router>
        <Header/>
        <Switch>
          
          <Route path="/">
            <Home/>
          </Route>
       
          <Route path="/contact">
            <Contact />
          </Route>
       
          <Route path="/livecam">
            <Livecameras/>
          </Route>
       
          <Route path="/news">
            <News/>
          </Route>
       
          <Route path="/photos">
            <Photos/>
          </Route>
       
          <Route path="/signale">
            <Single/>
          </Route>
       
        </Switch>
        <Footer/>
      </Router>
    
  );
}




