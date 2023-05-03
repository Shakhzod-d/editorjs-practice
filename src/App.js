import "./App.css";
import React from "react";
import ReactEditor from "./Editor";

function App() {
  const editorCore = React.useRef(null);
  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    console.log(savedData);
  }, []);

  return (
    <main>
      <ReactEditor handleInitialize={handleInitialize} />
      <button onClick={handleSave}>save</button>
    </main>
  );
}

export default App;
