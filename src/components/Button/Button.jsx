import React from "react";
import styled from "styled-components";

const Button = ({type,children,handleclick =()=>{},color="default",loading}) =>{

  const LoadingStyle = styled.span`
    color: #ffffff;
    font-size: 45px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: relative;
    transform: translateZ(0);
    animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
  `

  const BtnStyle = styled.button`
    padding:.7rem;
    text-transform: uppercase;
    font-weight: 400;
    border-radius: .5rem;
    width: 100%;
    height: fit-content;
    outline: none;
    border: 1px solid black;
    ${ color === "default" &&  " background: transparent;"}
    ${ color === "light" &&  " background: white;"}
    ${ color === "dark" &&  " background: black;"}
    color: black;
    transition: all 500ms ease-in-out;
    &:hover{
      border: 1px solid blue;
      color: blue;
      cursor:pointer;
    }
  `;


  return(
    <>
      {loading && <BtnStyle onClick={handleclick} type={type}><small><LoadingStyle></LoadingStyle></small></BtnStyle>}
      {!loading && <BtnStyle onClick={handleclick} type={type}><small>{children}</small></BtnStyle> }
    </>
  )
}

export default Button