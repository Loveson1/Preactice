import { useContext, useState, useRef, useEffect } from "react";
import { ItemPortal } from "./context";


export default function AddFood() {
  const [newFood, setNewFood] = useState("");
  const { items, setItems } = useContext(ItemPortal);

  const inputRef = useRef(null);

  useEffect(()=>{

    inputRef.current.focus()

  },[])

  const addFood = () => {
   
    
    const food = inputRef.current.value.trim();
   if (!food) return
    setItems([...items, food]);
    inputRef.current.value = "";

  };

    // const changehandler =(e)=>{
    //    setNewFood(e.target.value);

    // }

 
  return (
    <div className="flex">
      <textarea
        ref={inputRef}
        rows={5}
        column={100}
        placeholder="Enter food and calories here"
      ></textarea>

      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
