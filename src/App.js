import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextWork from "./Components/TextWork";
// import About from "./Components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mde, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mde === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b4248";
      showAlert("Dark Mode Has Been Enabled.", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils-Best App";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled.", "success");
      document.title = "TextUtils-Light Mode";
      // setInterval(() => {
      //   document.title="TextUtils-Install Now";
      // }, 2000);
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mod={mde} tgl={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextWork heading="Work Space" mod={mde} showAlert={showAlert} />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
