import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FileTree from "./File_Str_like_tree/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FileTree />
  </React.StrictMode>
);
