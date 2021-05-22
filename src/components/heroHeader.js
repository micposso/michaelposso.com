import React from "react"
import {  FaReact, FaWordpress, FaAws, FaUnity } from 'react-icons/fa';
import { GrGraphQl, GrGatsbyjs } from "react-icons/gr";
import { DiMysql, DiPhp, DiMongodb, DiJavascript1, DiNodejs } from "react-icons/di";
import { IconContext } from "react-icons";

import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
              tagline
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
          <p><b>{data.site.siteMetadata.home.tagline}</b></p>
          <br></br>
          <IconContext.Provider value={{ size: "80", className: "skills-icon" }}>
            <div className="skills-container">
              <FaReact />
              <FaWordpress />
              <GrGatsbyjs />
              <FaUnity  />
              <DiJavascript1 />
              <DiPhp />
              <FaAws />
            </div>
          </IconContext.Provider>
        </div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)