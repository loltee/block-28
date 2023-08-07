import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Red from "./components/Red.jsx";
import Blue from "./components/Blue.jsx"; 
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/home" className="home">Home</Link>
        <Link to="/blue" className="blue">Blue</Link>
        <Link to="/red" className="red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;