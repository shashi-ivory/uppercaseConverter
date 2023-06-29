// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";

function App() {
  const [mode, setMode] = useState("light");
  //weather the mode dark or light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("dark");
      document.body.style.backgroundColor = "#0B1340";
    } else {
      setMode("light");
      console.log("light");
      document.body.style.backgroundColor = "light";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextFrom
          heading="Enter here Anything you Want to convert into uppper case "
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
