import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
       <h2>
           <ul>
            <li>
            < Link to="/Home">Home</Link>
            </li>
            <li>
            <Link to="/">AboutUs</Link>
            </li>
            </ul>
          <h1>Hallo Priti</h1> 
       </h2>
        
      );
  }
  
  export default AboutUs;