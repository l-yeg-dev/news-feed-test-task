import React from "react";
import NavBar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider/Slider";

const App = () => {

  return (
    <>
      <NavBar />
      <Slider />
      <News />
    </>
  )};

export default App;
