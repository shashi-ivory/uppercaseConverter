// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextFrom heading="Enter here Anything you Want to convert into uppper case " />
      </div>
    </>
  );
}

export default App;
