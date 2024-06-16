import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");
  const [fontSize, setFontSize] = useState(16); // Default font size

  const inputRef = useRef(null);

  const inputStyle = {
    border: "1px solid #ced4da",
    borderRadius: "5px",
    padding: "5px",
    fontSize: `${fontSize}px`,
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: `${fontSize}px`,
    cursor: "pointer",
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 10)); // Ensure minimum font size
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if clicked element is not inside the input field
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setEditMode(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Draggable>
      {editMode ? (
        <div ref={inputRef}>
          <input
            style={inputStyle}
            onDoubleClick={(e) => setEditMode(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <div>
            <button onClick={increaseFontSize}>Increase Font Size</button>
            <button onClick={decreaseFontSize}>Decrease Font Size</button>
          </div>
        </div>
      ) : (
        <h1
          style={headingStyle}
          onDoubleClick={(e) => setEditMode(true)}
          ref={inputRef}
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
