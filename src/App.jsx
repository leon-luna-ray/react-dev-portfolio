import React, { useEffect, useState } from "react";
import {
  fetchGlobal,
} from "./data/sanity";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/index.jsx";

import "./assets/styles/main.css";


function App() {
  const [global, setGlobal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const globalData = await fetchGlobal();

      setGlobal(globalData);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
