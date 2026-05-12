import React from "react";
import { useState, createContext } from "react";

export const ItemPortal = React.createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([ "Baked Beans 200 calories", "Grilled Veggies 80 calories", "Soup 100 calories" ]);

  return <ItemPortal.Provider value={{items, setItems}}>{children}</ItemPortal.Provider>;
}
