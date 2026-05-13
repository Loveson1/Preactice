import { useContext } from "react";
import { ItemPortal } from "./context";

export default function Food() {
  const { items, setItems } = useContext(ItemPortal);

  const eaten = (foodName) => {
   const newFoodArray = items.filter(food => food !== foodName)

    setItems(newFoodArray);
  };

  return (
    <div className="grid">
      {items.map((f, index) => (
        <div className="flex" key={index}>
          {f}
          <button  onClick={()=>eaten(f)}>Eat It</button>
        </div>
      ))}
    </div>
  );
}
