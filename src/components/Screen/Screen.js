import "./Screen.css";
import { useState } from "react";

function Screen() {
  const [initialValue, setValue] = useState("");
  const addCommas = (event)=>{
    const inputValue = event.target.value.replace(/,/g, '');
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setValue(formattedValue);
  }
  return <input type="text" name="screen" id="screen" value={initialValue} onChange={addCommas} />;
}

export default Screen;