import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Splitter: {
            splitBarSize: 4,
            splitTriggerSize: 16,
            resizeSpinnerSize: 40,
          },
        },
      }}
    >
      <main>
        <App />
      </main>
    </ConfigProvider>
  </StrictMode>,
);
