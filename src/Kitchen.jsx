import { useContext } from "react"
import { ItemPortal } from "./context.jsx";

export default function Kitchen() {
  const handle = () =>{
    setItems({
      ...items,
      food:"pizza"
    })
  }
    const {items, setItems} = useContext(ItemPortal);

 return( 
 <div >
   <p>
    Serving: {items.food}
    </p>  
    <button onClick={handle}>Change food</button>

  </div>
 )
}