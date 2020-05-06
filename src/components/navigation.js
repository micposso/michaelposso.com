import React from "react"
import Avatar from "../components/avatar"
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiFileTextLine } from 'react-icons/ri';
import { IconContext } from "react-icons";


export default (props) => (
  <nav className="navigation">
    <div className="brand-container">
      <Avatar />
      <h1 className="headline">Michael Posso</h1>
    </div>

    <div className="navigation-icons">
    <IconContext.Provider value={{ color: "black", size: "30", className: "social-icon" }}>
      <>
        <FaGithub />
        <FaTwitter />
        <FaLinkedinIn />
        <RiFileTextLine />
      </>
    </IconContext.Provider>
    </div>
  </nav>
)