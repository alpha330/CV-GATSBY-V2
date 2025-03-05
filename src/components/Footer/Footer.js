import React from "react";
import styled from "styled-components"; 
import Bio from "../bio";

const Footer = () => {
    const FooterDiv = styled.div`
        background: #333;
        color: #fff; 
        textAlign: center;
        padding: 10px; 
        marginTop: 20px; 
        display:flex;
        alig-items: center;
        justif-content:center;
        flex-direction:column;
        text-align:center;
    `
    return (
        <FooterDiv>
            <p>&copy; {new Date().getFullYear()} My Tech Blog. All rights reserved.</p>
            <Bio/>
        </FooterDiv>
    );
};

export default Footer;