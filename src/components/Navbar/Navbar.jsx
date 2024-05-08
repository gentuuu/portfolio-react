import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function Navbar() {
// adding the states
const [isActive, setIsActive] = useState(false);
//add the active class
const toggleActiveClass = () => {
setIsActive(!isActive);
};
//clean up function to remove the active class
const removeActive = () => {
setIsActive(false)
}

const [isDark, setIsDark] = useState(false);

const toggleDarkMode = () => {
  setIsDark(!isDark);
  const rootElement = document.getElementById('root');
  rootElement.classList.remove('light', 'dark');
  if (isDark) {
    rootElement.classList.add('light');
  } else {
    rootElement.classList.add('dark');
  }
};


return (
  <div className="header-nav">
    <div className="container">
      <div className="header-nav-content">
        <div className="logo"></div>
        <nav className="navbar">
          <ul className={`navMenu ${isActive ? 'active' : '' }`}>
            <li onClick={removeActive}>
              <Link to='/home#section1' className="navLink">Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section2' className="navLink">O mnie</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section3' className="navLink">Umiejętności</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section4'className="navLink">Doświadczenie</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section5' className="navLink">Edukacja</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section6' className="navLink">Projekty</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/home#section7' className="navLink">Kontakt</Link>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : '' }`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
        <button onClick={toggleDarkMode}>
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  </div>

);
}
export default Navbar;