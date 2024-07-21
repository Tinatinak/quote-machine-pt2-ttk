import React, { useRef, useState } from "react";

export default function Upload() {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(-1);
  const [file, setFile] = useState([]);

  const parse = () => {
    console.log("file", file);

    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      console.log(json);
    };
  };
  const onFileSelect = (e: any) => {
    e.target.files && e.target.files.length > 0 && setFile(e.target.files[0]);
  };
  return (
    <div className="upload">
      <h1>Quotes upload</h1>
      <h2>Select a file to upload</h2>
      <input ref={inputRef} type="file" onChange={onFileSelect} />
      <div>
        {file && (
          <button className="btn btn_primary btn_rounded" onClick={parse}>
            Upload
          </button>
        )}
      </div>
    </div>
  );
}
