import React from "react";
import { Link } from "gatsby";
import styled from "styled-components"; 
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {

    const HeaderWrapper = styled.header`
      background-color: #333;
      padding: 20px;
      color: #fff;   
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:row;
      height:10vh;
    `;

    const Nav = styled.nav`
      display: flex;
      gap: 25px;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #ddd;
        }
      }
    `;

    const TitleDiv = styled.div`
        display: flex;
        gap: 15px;
    `


    return (
      <HeaderWrapper>
        <StaticImage
            alt="Avatar"
            src="../../images/profilepic.jpg"
            className="Header_image"
        />
        <Nav>
            <Link to="/" >Home</Link>
            <Link to="/blog" >Blog</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact-me">Contact Me</Link>                 
        </Nav>
        <TitleDiv>
            Ali`s Blog
        </TitleDiv>                
      </HeaderWrapper>
    );
};

export default Header;