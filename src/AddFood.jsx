import { useContext, useState, useRef } from "react";
import { ItemPortal } from "./context";


export default function AddFood() {
  const [newFood, setNewFood] = useState("");
  const { items, setItems } = useContext(ItemPortal);

  const inputRef = useRef(null);

  const addFood = (e) => {
    
    const food = inputRef.current.value;
    setNewFood(food);
    setItems([...items, newFood]);
   
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
