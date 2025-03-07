import React from "react";
import styled from "styled-components";
import { useEffect,useRef } from "react";

const Message = ({type,message}) =>{

    const mainDivRef = useRef(null)

    useEffect(()=>{
        mainDivRef.current.style.display = "flex"
    },[])

    const MainDivMessage = styled.div`
        width:fit-content;
        height:fit-content;
        padding:.6rem;
        background-color:${type === "success" && "rgb(48, 80, 44)"}${type === "fail" && "rgb(80, 44, 44)"}${type === "warning" && "rgb(75, 80, 44)"};
        color: white;
        display:none;
        align-items:center;
        justify-content:center;
        border-radius:8px;
        position:fixed;
        top:12%;
        left:90%;
        z-index:1000;
        animation:messageMotion 1s ease-in;      
    `
    const TextMessage = styled.p`
        margin:.5rem;
        font-size:.8rem;
        text-transform:capitalize;
        font-weight:400;
        text-align:center;
    `


    return (
        <MainDivMessage ref={mainDivRef}>
            <TextMessage>{message}</TextMessage>
        </MainDivMessage>
    )
}

export default Message