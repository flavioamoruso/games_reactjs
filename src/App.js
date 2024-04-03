import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeScreen from "./screen/HomeScreen";
import ErrorScreen from "./screen/ErrorScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  });
  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="*" Component={ErrorScreen} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
