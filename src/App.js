// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import Alert from "./component/Alert";

function App() {
  // console.log(alert);
  const [mode, setMode] = useState("light");
  //weather the mode dark or light mode
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // console.log("dark");
      document.body.style.backgroundColor = "#0B1340";
      handleAlert("Dark Mode Enable Now!!!", "success");
      setInterval(() => {
        document.title = "Install TextUtil now..";
      }, 3000);
    } else {
      setMode("light");
      // console.log("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light Mode Enable Now!!!", "success");

      setInterval(() => {
        document.title = "Install Now..";
      }, 1500);
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextFrom
          heading="Enter here Anything you Want to convert into uppper case "
          mode={mode}
          handleAlert={handleAlert}
        />
      </div>
    </>
  );
}

export default App;
