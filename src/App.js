import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Sidebar from "../src/components/Sidebar";
import HomeScreen from "./screen/HomeScreen";
import ErrorScreen from "./screen/ErrorScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactScreen from "./screen/ContactScreen";
import AboutScreen from "./screen/AboutScreen";

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
          <Sidebar />
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/contact" Component={ContactScreen} />
            <Route />
            <Route path="*" Component={ErrorScreen} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
