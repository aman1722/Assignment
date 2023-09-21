import React, { useState } from "react";

const ToogleContent = ({ defaultVisibility = false, content, buttonLabel }) => {
  const [isVisible, setIsVisible] = useState(defaultVisibility);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toogle Component</h1>
      <h3>Click on button to show content</h3>
      <button onClick={toggleVisibility}>{buttonLabel}</button>
      {isVisible && <div>{content}</div>}
    </div>
  );
};

export default ToogleContent;
