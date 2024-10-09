import React, { useEffect, useRef, useState } from "react";
import { Button, Divider, Flex, Input, Splitter, Typography } from "antd";
import { CodeEditor, XTerminal } from "./component";
import { Tabs, Tree } from "./common";
import {
  FileAddOutlined,
  FolderAddOutlined,
  SyncOutlined,
} from "@ant-design/icons";
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
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#242424",
      }}
    >
      <Splitter.Panel
        defaultSize="300"
        min={300}
        max={400}
        collapsible={{
          start: true,
        }}
      >
        <Flex
          className={"pl-3 pr-3"}
          justify={"space-between"}
          align={"center"}
          style={{
            height: 45,
          }}
        >
          <span>文件</span>
          <Flex>
            <Button type={"text"} icon={<FileAddOutlined />}></Button>
            <Button type={"text"} icon={<FolderAddOutlined />}></Button>
          </Flex>
        </Flex>
        <Divider className="mt-0 mb-2" />
        <Tree></Tree>
      </Splitter.Panel>
      <Splitter.Panel>
        <Tabs />
      </Splitter.Panel>
      <Splitter.Panel defaultSize="600" min={400} max={700}>
        <Flex
          vertical={true}
          style={{
            height: "100%",
          }}
        >
          <Flex className={"flex flex-row  items-center pl-2 pr-3 my-3"}>
            <Button icon={<SyncOutlined />} type={"text"} />
            <Input disabled={true} value={"http://192.168.1.30:8001/"}></Input>
          </Flex>
          <Flex className={"h-full"}>
            <Splitter layout="vertical">
              <Splitter.Panel
                defaultSize="500"
                min={400}
                max={600}
                className={"p-2"}
              >
                <iframe
                  src="http://192.168.1.30:8001"
                  title="开发环境"
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: 10,
                    border: "none",
                  }}
                />
              </Splitter.Panel>
              <Splitter.Panel></Splitter.Panel>
            </Splitter>
          </Flex>
        </Flex>
      </Splitter.Panel>
    </Splitter>
  );
};
export default App;
