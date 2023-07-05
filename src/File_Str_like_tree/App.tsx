import { useState } from "react";

const Structure = [
  {
    name: "node_modules",
    children: [
      {
        name: "Joi",
        children: [{ name: "node_module" }, { name: "package.json" }],
      },
    ],
  },
  { name: "package.json" },
  { name: "tscofig.json" },
  {
    name: "src",
    children: [
      {
        name: "File str",
        children: [{ name: "App.tsx" }, { name: "main.tsx" }],
      },
    ],
  },
];

type TConfig = {
  name: string;
  children?: TConfig[];
};

type TOrigin = {
  depth: number;
  value: TConfig;
};

const FileConfig = ({ depth, value }: TOrigin) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div style={{ paddingLeft: depth * 10 }}>
      {value.children ? (
        <button className="folders" onClick={() => setisOpen(!isOpen)}>
          {isOpen ? "- " : "+ "}
          {value.name}
        </button>
      ) : (
        <div className="files">{value.name}</div>
      )}
      {isOpen &&
        value.children?.map((file) => (
          <FileConfig depth={depth + 1} value={file} />
        ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {Structure.map((file) => (
        <FileConfig depth={1} value={file} />
      ))}
    </div>
  );
};

export default App;
