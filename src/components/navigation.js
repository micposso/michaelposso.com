import React from "react"
import ThemeChanger from "../components/themeChanger"
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";


export default (props) => (
  <nav className="navigation">
    <h1 className="headline">Michael Posso</h1>
    <div className="navigation-icons">
    <IconContext.Provider value={{ color: "black", size: "30", className: "social-icon" }}>
      <>
        <FaGithub />
        <FaTwitter />
        <FaLinkedinIn />
        <ThemeChanger/>
      </>
    </IconContext.Provider>
    </div>
  </nav>
)