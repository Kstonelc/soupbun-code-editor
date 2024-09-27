import React, { useEffect, useRef } from "react";
import { Flex, Splitter, Tabs, Typography } from "antd";
import { CodeEditor } from "./component";
const Desc = (props) => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: "100%",
    }}
  >
    <Typography.Title
      type="secondary"
      level={5}
      style={{
        whiteSpace: "nowrap",
      }}
    >
      Panel {props.text}
    </Typography.Title>
  </Flex>
);
const App = () => {
  useEffect(() => {}, []);
  const tabItems = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return {
      label: `Tab ${id}`,
      children: `Content of Tab Pane ${index + 1}`,
      key: id,
    };
  });
  return (
    <Splitter
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Splitter.Panel
        defaultSize="400"
        min={400}
        max={500}
        collapsible={{
          start: true,
        }}
        style={{
          width: 200, // 固定宽度
          flex: "none", // 不伸缩
        }}
      >
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel>
        <CodeEditor></CodeEditor>
      </Splitter.Panel>
      <Splitter.Panel defaultSize="700" min={600} max={700}>
        <Splitter layout="vertical">
          <Splitter.Panel>
            <Desc text="3" />
          </Splitter.Panel>
          <Splitter.Panel>
            <Desc text="4" />
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
    </Splitter>
  );
};
export default App;
