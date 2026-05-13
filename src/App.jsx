import React from "react";
import "./index.css";
import Food from "./Counter";
import Counter from "./Food";
import { ItemProvider } from "./context";
import AddFood from "./AddFood";

function App() {
  return (
    <ItemProvider>
      <h2>Food Tracker</h2>
      <div className="flex2">
        <AddFood />
        <Counter />
      </div>
      <Food />
    </ItemProvider>
  );
}

export default App;
