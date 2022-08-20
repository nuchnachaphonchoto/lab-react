import React from 'react';
import './App.css';
import { Link,Outlet } from "react-router-dom";

function App() {
  return (
    <div class="center">
    <h1> Game Logic </h1>
  
    
  

    <Link to="/level1" class="button">level1</Link>
    <Link to="/level2" class="button">level2</Link>
    <Link to="/level3" class="button">level3</Link>

    <Outlet />
    
      
      <p><b>Description : </b>Arrange the following letters in the correct words.</p>
     
    </div>
    );
   
}
export default App;