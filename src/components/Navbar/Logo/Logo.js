import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useTheme } from "../../../utils/themeContext";

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img fixed={data.logo.childImageSharp.fixed}/>
  );
};

const LogoWrapper = () => {
  const { setTheme, currTheme } = useTheme();
  const toggleTheme = () => setTheme(theme => {
    return theme === 'dark' ? 'light': 'dark'
  })
  return (
    <span 
      onClick={toggleTheme} 
      style={{filter: `${currTheme === 'light' && 'drop-shadow(0 0 1px rgba(0, 0, 0, .1))'}`}}
    >
      <Logo theme={currTheme}/>
    </span> 
  )
}

export default LogoWrapper;
