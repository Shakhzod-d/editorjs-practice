import React, { Component } from "react";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./Tools";

// import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS();

const ReactEditor = ({ handleInitialize }) => {
  return (
    <ReactEditorJS
      onInitialize={handleInitialize}
      tools={EDITOR_JS_TOOLS}
      defaultValue={{
        time: 1635603431943,
        blocks: [
          {
            id: "sheNwCUP5A",
            type: "header",
            data: {
              text: "Editor.js",
              level: 2,
            },
          },

          {
            id: "fvZGuFXHmK",
            type: "header",
            data: {
              text: "Key features",
              level: 3,
            },
          },
          {
            id: "SzwhuyoFq6",
            type: "header",
            data: {
              text: "What does it mean clean data output",
              level: 3,
            },
          },
        ],
      }}
    />
  );
};

export default ReactEditor;
