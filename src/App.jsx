import React from "react";
import "./index.css";
import Counter from "./Counter";
import Food from "./Food";
import { ItemProvider } from "./context";
import AddFood from "./AddFood";

function App() {
  return (
    <ItemProvider>
      <h2>Food Tracker</h2>
      <div>
        <AddFood />   
        <Counter />
        <Food />
      </div>
      <div> 
     
     
      </div>
    </ItemProvider>
  );
}

export default App;
