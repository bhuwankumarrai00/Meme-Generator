import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const memeStyle = {
    marginTop: "5rem",
    marginBottom: "5rem",
    textAlign: "center",
  };

  const imageStyle = {
    width: "250px",
  };

  const buttonStyle = {
    marginRight: "10px",
  };

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={memeRef} style={memeStyle}>
        <img alt="" src={params.get("url")} style={imageStyle} />
        {Array(count).fill(0).map((e, index) => (
          <Text key={index} />
        ))}
      </div>
      <Button style={buttonStyle} onClick={addText}>
        Add Text
      </Button>
      <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
