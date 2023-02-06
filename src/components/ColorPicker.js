import React, { useState } from "react";

const ColorPicker = () => {
  const [red, setred] = useState('0');
  const [green, setgreen] = useState('255');
  const [blue, setblue] = useState('0');
//   const handleChange = (clrValue, clr) => {
//     console.log(clrValue, clr);
//     // clr ="red,green,blue "
//     switch (clr) {
//       case "red":
//         setred(clrValue);
//         break;
//       case "green":
//         setgreen(clrValue);
//         break;
//       case "blue":
//         setblue(clrValue);
//         break;
//       default:
//         break;
//     }
//   };
  return (
    <div style={{ 
        background: `rgb(${red},${green},${blue})` 
    }}>
      RED : <input type="range" max={"256"} value={red} min="0" onChange={(e)=>setred(e.target.value)} /> <br />
        GREEN : <input type="range" max={"256"}value={green} min="0" onChange={(e)=>setgreen(e.target.value)} /> <br />
        BLUE : <input type="range" max={"256"} value={blue} min="0" onChange={(e)=>setblue(e.target.value)} /><br />
      RED :{" "}
      <input
        type="range"
        max={"256"}
        value={red}
        min="0"
        onChange={(e) => handleChange(e.target.value, "red")}
      />{" "}
      <br />
      GREEN :{" "}
      <input
        type="range"
        max={"256"}
        value={green}
        min="0"
        onChange={(e) => handleChange(e.target.value, "green")}
      />{" "}
      <br />
      BLUE :{" "}
      <input
        type="range"
        max={"256"}
        value={blue}
        min="0"
        onChange={(e) => handleChange(e.target.value, "blue")}
      />
      <br />
    </div>
  );
};

export default ColorPicker;
