import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

const CodeEditor = () => {
  useEffect(() => {}, []);
  const onChange = () => {};
  return (
    <CodeMirror
      value={"console.log('Hello World')"}
      height={"100vh"}
      width={"100%"}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
};

export { CodeEditor };
