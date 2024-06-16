import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
const [editMode, setEditMode] = useState(false);
const [val, setVal] = useState("Double Click to Edit");
const [fontSize, setFontSize] = useState(16); // Default font size

const inputStyle = {
border: "1px solid #ced4da",
borderRadius: "5px",
padding: "5px",
fontSize: ${fontSize}px,
};

const headingStyle = {
textAlign: "center",
fontSize: ${fontSize}px,
cursor: "pointer",
};

const increaseFontSize = () => {
setFontSize((prevSize) => prevSize + 2);
};

const decreaseFontSize = () => {
setFontSize((prevSize) => Math.max(prevSize - 2, 10)); // Ensure minimum font size
};

return (
<Draggable>
{editMode ? (
<div>
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
<h1 style={headingStyle} onDoubleClick={(e) => setEditMode(true)}>
{val}
</h1>
)}
</Draggable>
);
};

export default Text;
