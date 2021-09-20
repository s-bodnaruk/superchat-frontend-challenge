import React, { useState } from "react";
import { PopoverPicker } from "@/components/PopoverPicker";

const HomePage = () => {
  const [color, setColor] = useState("#aabbcc");
  console.log("colorrrrr", color);
  return (
    <>
      <h1>Choose your style before getting a link:</h1>
      <PopoverPicker color={color} onChange={setColor} />
    </>
  );
};

export default HomePage;
