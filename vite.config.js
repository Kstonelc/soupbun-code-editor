import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 允许所有主机访问
    strictPort: true, // 如果端口被占用，退出
  },
});
