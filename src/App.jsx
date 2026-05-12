import React from "react";
import "./index.css";
import Kitchen from "./Kitchen";
import DinningRoom from "./DinningRoom";
import { ItemProvider } from "./context";

function App() {
  return (
    <ItemProvider>
      <Kitchen />
      <DinningRoom />
    </ItemProvider>
  );
}

export default App;
