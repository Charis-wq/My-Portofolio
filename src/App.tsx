import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-10 pb-10">
        <Hero/>
        <About/>
        <Project/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
