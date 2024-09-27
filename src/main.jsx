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
          // Seed Token，影响范围大
          cardHeight: 10,
          cardGutter: 20,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
