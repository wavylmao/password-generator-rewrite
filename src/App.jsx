import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Output from "./components/Output/Output";

function App() {
  const [data, setData] = useState("");

  const childToParent = (childData) => {
    setData(childData);
  };
  return (
    <div className="App">
      <Output parentToChild={data} />
      <Buttons childToParent={childToParent} />
    </div>
  );
}

export default App;
