import React from "react";
import { useState, createContext } from "react";

export const ItemPortal = React.createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState({ food: "Noodles", drink: "cola" });

  return <ItemPortal.Provider value={{items, setItems}}>{children}</ItemPortal.Provider>;
}
