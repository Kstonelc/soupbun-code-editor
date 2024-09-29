import React, { useEffect, useRef, useState } from "react";
import { Divider, Flex, Splitter, Typography } from "antd";
import { CodeEditor } from "./component";
import { Tabs, Tree } from "./common";
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
  return (
    <Splitter
      className={"bg-background"}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Splitter.Panel
        className={"p-1"}
        defaultSize="300"
        min={300}
        max={400}
        collapsible={{
          start: true,
        }}
      >
        <div
          className={
            "flex items-center justify-start  font-bold ml-2 text-white"
          }
        >
          文件
        </div>
        <Divider
          className="my-1 border-white"
          style={{
            height: 0.5,
          }}
        />
        <Tree className="mt-2 bg-background text-white"></Tree>
      </Splitter.Panel>
      <Splitter.Panel>
        <Tabs />
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
