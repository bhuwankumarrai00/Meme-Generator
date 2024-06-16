import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState("Click to Edit");
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [textColor, setTextColor] = useState("#000"); // Default text color

  const inputRef = useRef(null);

  const inputStyle = {
    border: "1px solid #ced4da",
    borderRadius: "5px",
    padding: "5px",
    fontSize: `${fontSize}px`,
    color: textColor,
    cursor: "pointer",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: `${fontSize}px`,
    cursor: "pointer",
    color: textColor,
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 10)); // Ensure minimum font size
  };

  const randomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setTextColor(randomColor);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if clicked element is not inside the input field
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Draggable>
      {isEditing ? (
        <div ref={inputRef}>
          <input
            style={inputStyle}
            autoFocus // Auto focus on input when in edit mode
            onBlur={handleBlur} // Exit edit mode on blur
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <div>
            <button onClick={increaseFontSize}>Increase Font Size</button>
            <button onClick={decreaseFontSize}>Decrease Font Size</button>
            <button onClick={randomColor}>Random Color</button>
          </div>
        </div>
      ) : (
        <h1
          style={headingStyle}
          onClick={handleDoubleClick} // Toggle edit mode on click
          ref={inputRef}
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
