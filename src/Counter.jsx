import { useContext } from "react";
import { ItemPortal } from "./context";



export default function Counter() {
  const {items} = useContext(ItemPortal);
  
  return (
    <div>

        <div className="flex2">
   <p className="flex3">  Meals Eaten:   <span>{items.length}</span></p>
        </div>
    
    </div>
  );
}
