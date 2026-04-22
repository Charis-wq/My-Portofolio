import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)] px-10 py-3 shadow-xl ">
      <h1 className="font-bold text-2xl">
        Abdul <span className="text-[var(--color-body)]">Charis</span>
      </h1>

      {/*Tapmpila untuk desktop dan tablet besar */}

      <div className="hidden md:flex text-right font-body gap-5 text-white text-md absolute right-8 top-4">
        <a href="#about" className="hover:text-[var(--color-accent)]">
          About
        </a>
        <a href="#project" className="hover:text-[var(--color-accent)]">
          Project
        </a>
        <a href="#contact" className="hover:text-[var(--color-accent)]">
          Contacts
        </a>

        {/* Tombol Dark Mode */}

        <button
          onClick={toggleTheme}
          className="p-1 rounded-full bg-[var(--color-body)] text-[var(--color-primary)] hover:scale-110 transition-all shadow-md"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <img
              className="w-5 h-5"
              src="src/assets/img/Light_mode.svg"
              alt="sun icon"
            />
          ) : (
            <img
              className="w-5 h-5"
              src="src/assets/img/moon_dark_mood.svg"
              alt="moon icon"
            />
          )}
        </button>
      </div>

      {/* Tampilan untuk mobile dan tablet kecil */}
      {/*Dark Menu  */}
      <div className="flex md:hidden items-center text-right absolute right-8 top-4 gap-4">
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full bg-[var(--color-body)] text-[var(--color-primary)] hover:scale-110 transition-all shadow-md"
        >
          {isDark ? (
            <img
              className="w-5 h-5"
              src="src/assets/img/Light_mode.svg"
              alt="sun icon"
            />
          ) : (
            <img
              className="w-5 h-5"
              src="src/assets/img/moon_dark_mood.svg"
              alt="moon icon"
            />
          )}
        </button>
        {/* Hamburger Icon*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--color-body)] focus:outline-none"
        >
          <img className="w-5 h-5" src="src/assets/img/hamburger_icon.svg" alt="hamburger icon" />
        </button>
        {/* hamburger menu*/}
        <div>
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : " "}`}
          ></span>
          <span
            className={`h-0.5 w-full transition duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : " "}`}
          ></span>
        </div>

        {/* Mobile Menu */}

        <div
          className={`fixed inset-0 bg-black/50  flex flex-col items-start px-25 py-10 gap-8 text-xl text-[var(--color-body)] transition-transform duration-500 translate-x-1/2 md:hidden ${
            isOpen ? "translate-y-14" : "-translate-y-full "
          }`}
        >
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-[var-(--color-accent)]"
          >
            About
          </a>
          <a
            href="#project"
            onClick={() => setIsOpen(false)}
            className=" text-white hover:text-[var-(--color-accent)]"
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className=" text-white hover:text-[var-(--color-secondary)]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
