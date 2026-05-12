import React from "react";
import "./index.css";
import Food from "./Counter";
import Counter from "./Food";
import { ItemProvider } from "./context";

function App() {
  return (
    <ItemProvider> 
      <Counter />
      <Food />
     
    </ItemProvider>
  );
}

export default App;
