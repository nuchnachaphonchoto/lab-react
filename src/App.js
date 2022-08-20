import React from 'react';
import './App.css';
import { Link,Outlet } from "react-router-dom";

function App() {
  return (
    <div class="center">
    <h1> Game Logic </h1>
  
    
  

    <Link to="/level1">level1</Link>
    <Link to="/level2">level2</Link>
    <Link to="/level3">level3</Link>

    <Outlet />
    
      
      <p><b>Description : </b>Arrange the following letters in the correct words.</p>
     
    </div>
    );
   
}
export default App;