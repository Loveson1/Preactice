import { useContext } from "react";
import { ItemPortal } from "./context.jsx";

export default function DinningRoom() {
    const handle = () =>{
    setItems({
      ...items,
      food:"Noodles"
    })
  }
  const {items, setItems} = useContext(ItemPortal);

  return (
    <div>
      <p>Serving: {items.food}</p>
       <button onClick={handle}>Change food</button>
    </div>
  );
}
