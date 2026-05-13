import { useContext, useState } from "react";
import { ItemPortal } from "./context";

export default function AddFood() {
  const [newFood, setNewFood] = useState("");
  const { items, setItems } = useContext(ItemPortal);

  const addFood = (e) => {
    setItems([...items, newFood]);
    setNewFood("");
  };

  const changehandler =(e)=>{
     setNewFood(e.target.value);
     
  }

  return (
    <div className="flex">
      <textarea
        rows={5}
        column={100}
        value={newFood}
        placeholder="Enter food and calories here"
        onChange={changehandler}
      ></textarea>
      
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
