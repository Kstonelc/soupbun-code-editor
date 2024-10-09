import React from "react";
import { XTerm } from "react-xtermjs";

const XTerminal = () => {
  const onData = (data) => {
    console.log(`Received data: ${data}`);
  };

  const onResize = (cols, rows) => {
    console.log(`Terminal resized to ${cols} columns and ${rows} rows`);
  };

  return (
    <XTerm
      onData={onData}
      onResize={onResize}
      options={{
        rendererType: "canvas", //渲染类型
        scrollback: 50, //终端中的回滚量
        disableStdin: false, //是否应禁用输入。
        cursorStyle: "underline", //光标样式
        cursorBlink: true, //光标闪烁
        wraparoundMode: true,
        rows: 35,
        windowsMode: true, // 根据窗口换行
        theme: {
          foreground: "#ffffff", //字体
          background: "#1a1a1d", //背景色
          cursor: "help", //设置光标
          lineHeight: 16,
        },
      }}
      style={{ width: "100%", height: 200, overflowY: "auto" }}
    />
  );
};

export { XTerminal };
