import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <h4>Choose color below</h4>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
