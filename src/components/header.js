import { Link } from "gatsby";
import PropTypes from "prop-types";
import React ,{useState}from "react";
import Main from "./Main";



const Header = ({ siteTitle }) => {
  const [toggle,setToggle] = useState(false)

  return (
  <header>
    <div className={`menu-toggler ${toggle ? 'open' : ''}`} onClick={()=> setToggle(!toggle)}>
      <div className="bar half start"></div>
      <div className="bar "></div>
      <div className="bar half end"></div>

    </div>
    <nav className={`top-nav ${toggle ? 'open' : ''}`}>
      <ul className="nav-list">

        <li>  
          <a href="#index" className="nav-link">Home</a>
        </li>

        <li>
          <a href="#about" className="nav-link">About</a>
        </li>

        <li>
          <a href="#about" className="nav-link">Services</a>
        </li>
        <li>
          <a href="#projects" className="nav-link">Projects</a>
        </li>

        <li>
          <a href="#experience" className="nav-link">Experience</a>
        </li>

        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  <Main/>
  </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
