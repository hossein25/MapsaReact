import { Button } from "@material-ui/core";
import { useRef } from "react";

const UploadButton = (props) => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="file" hidden />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          inputRef.current.click();
        }}
      >
        Upload Button
      </Button>

      <label htmlFor="upload">uplaod</label>
      <input type="file" id="upload" hidden />
    </div>
  );
};

export default UploadButton;
