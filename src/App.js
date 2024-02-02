// import { useState } from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [modeLabel, setModeLabel] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);


      
    }, 3000);
  };

  const toggleMode = () => {


  
    if (mode === "dark") {
      setModeLabel("Dark Mode");
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled!", "success");
    } else {
      setModeLabel("White Mode");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode enabled!", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextX"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          modeLabel={modeLabel}
        />
        <Alert alert={alert} />

        {/* <Routes>
          <Route
            exact
            path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Formatting is Fun ;)"
                mode={mode}
              />
            {/* }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
