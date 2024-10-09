import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeEditor = () => {
  useEffect(() => {}, []);
  const onChange = () => {};
  return (
    <CodeMirror
      theme={vscodeDark}
      value={"console.log('Hello World');"}
      height={"92vh"}
      className={"text-sm"}
      style={{
        overflowY: "auto",
      }}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
};

export { CodeEditor };
