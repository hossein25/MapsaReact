import { Button } from "@material-ui/core";
import { forwardRef, useRef } from "react";

const UploadButton = (props) => {
  const inputRef = useRef(null);

  return (
    <div>
      <FilePicker ref={inputRef} />
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

const FilePicker = forwardRef((props, ref) => {
  return <input ref={ref} type="file" hidden />;
});
