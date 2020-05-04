import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children, props }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
    <div className="top-line"></div>
    <div className="site-wrapper">
      <header className="site-header">
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; This site is based on the template Delog from <a href="https://w3layouts.com">W3Layouts</a></p>
      </footer>
    </div>
    </>
  )
}