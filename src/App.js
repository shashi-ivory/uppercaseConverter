// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import Alert from "./component/Alert";
import About from "./component/About";
import Users from "./component/Users";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
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
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-muted");
    document.body.classList.remove("bg-white");
    document.body.classList.remove("bg-info");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#0B1340";
      handleAlert("Dark Mode Enable Now!!!", "success");
      // document.title = "Dark Mode";

      // setInterval(() => {
      //   document.title = "Install TextUtil now..";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "Install Now..";
      // }, 1500);
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      handleAlert("Light Mode Enable Now!!!", "success");
      // document.title = "Light Mode";
    }
  };
  const heading =
    " Try TextUtils-Word Counter ,character counter ,remove extra spaces ";

  return (
    <>
      <Router>
        <Navbar
          toggleMode={toggleMode}
          mode={mode}
          Alert={alert}
          heading={heading}
        />
        <Alert alert={alert} />
        {/* <Alert alert={alert} />
    <About mode={mode} />
    <TextFrom mode={mode} handleAlert={handleAlert} /> */}
        {/* <Routes path="/" element={<TextFrom />} />
        <Routes path="About" element={<About />} />
        <Routes path="Home" element={<Home />} />
        <Routes path="Users" element={<Users />} /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextFrom
                handleAlert={handleAlert}
                mode={mode}
                heading={heading}
              />
            }
          />

          <Route exact path="/About" element={<About mode={mode} />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/Home" element={<Home />} mode={mode} />
        </Routes>
      </Router>
    </>
  );
}
