import React from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Footer from "./Footer";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
