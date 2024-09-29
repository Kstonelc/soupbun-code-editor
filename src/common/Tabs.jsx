import { ConfigProvider, Tabs as TabsAntd } from "antd";
const { TabPane } = TabsAntd;
import { CodeEditor } from "../component";
const Tabs = () => {
  return (
    <TabsAntd
      defaultActiveKey="1"
      type="editable-card"
      size={"small"}
      hideAdd={true}
    >
      <TabPane tab="index.jsx" key="1" className={"bg-amber-300 -mt-4"}>
        <CodeEditor></CodeEditor>
      </TabPane>
      <TabPane tab="Video.jsx" key="2">
        Content of Tab 2
      </TabPane>
    </TabsAntd>
  );
};
export { Tabs };
