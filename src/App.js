import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      // Favicon Title Changed
      document.title = "TextUtils - Dark Mode";

      // setTimeout(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = " Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* title and aboutText is a props  */}
      {/* <Navbar tilte = "TextUtils" aboutText = "About Us" /> */}

      <Router>
        <div className="d-flex flex-column min-vh-100">
          {" "}
          {/* Main Wrapper */}
          <Navbar
            title="TextUtils"
            aboutText="About Us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <div className="container my-5 flex-grow-1">
            {" "}
            {/* Content will grow */}
            <Alert alert={alert} />
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter the text you'd like to review and analyze"
                    mode={mode}
                  />
                }
              />
            </Routes>
          </div>
          <Footer mode={mode} />
        </div>
      </Router>
    </>
  );
}

export default App;
