import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Navbar";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>

  );
}

export default App;
