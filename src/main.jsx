import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // 全局Token配置
        },
        components: {
          //组件Token配置
          Tabs: {
            cardPaddingSM: 3,
          },
          Tree: {
            nodeSelectedBg: "#2e2f31",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
