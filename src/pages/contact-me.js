import { useState, useCallback } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Inputs from "../components/Inputs/Inputs";
import Button from "../components/Button/Button";
import React from 'react';
import Seo from "../components/seo";
import { ToastContainer, toast } from 'react-toastify';

const MainContactDiv = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ContactH1text = styled.h1`
  color: #2c3e50;
`;

const FormSection = styled.form`
  width: 50%;
  min-height: fit-content;
  max-height: 40vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  margin: auto;
  background-color: #33333349;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
  }
`;

const DivInput = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  text-align: center;
  text-transform: capitalize;
`;

const ParagraphErrors = styled.p`
  color:red;
  text-transfrom:capitalize;
`;

const ContactPage = ({ location }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading,setLoading] = useState(false);
  const [errors,setErrors] = useState('')

  const onChangeName = useCallback((e) => setName(e.target.value), []);
  const onChangeSurname = useCallback((e) => setSurname(e.target.value), []);
  const notify = (message)=>(toast(message))

  const onChangeEmail = useCallback((e) => {
    if (validateEmail(e.target.value)){
      setEmail(e.target.value)
      setErrors("")
    }else{
      setErrors("Email Format not Correct")
    } 
  }, []);

  const onChangeContent = useCallback((e) => setContent(e.target.value), []);

  const validateEmail = (email)=>{
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
  }
  
  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    if(email === ""){
      setLoading(false)
      notify("please fill form")
    }else{
      const data = { to: "alimahmoodi22@gmail.com", subject: `New Contact Request${email}-${name}-${surname}`, text: content };
  
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      
        const result = await response.json();
        console.log(result);
        if (response.ok) {
          notify("message has been sent")       
        }
        else {
          notify("Message not been sent")  
        };
        setLoading(false)
      } catch (error) {
        console.error("Error:", error);
        notify(`error : ${error}`) 
        setLoading(false)
      }

      }    
  };

  return (
    <Layout title="Contact Me" location={location}>      
      <ToastContainer />
      <MainContactDiv>
        <ContactH1text>Contact Me</ContactH1text>
        <FormSection onSubmit={onSubmit}>
          <DivInput>
            <Inputs onFunction={onChangeName} label="first name" type="text" nameFor="firstName" />      
          </DivInput>
          <DivInput>
            <Inputs onFunction={onChangeSurname} label="last name" type="text" nameFor="lastName" />
          </DivInput>
          <DivInput>
            <Inputs onFunction={onChangeEmail} label="email" type="email" nameFor="email" />
            {errors !== "" && <ParagraphErrors>{errors}</ParagraphErrors>}
          </DivInput>
          <DivInput>
            <Inputs onFunction={onChangeContent} label="content" type="textarea" nameFor="content" />
          </DivInput>
          <DivInput>
            <Button type="submit" loading={loading} color="default">Submit</Button>
          </DivInput>
        </FormSection>
      </MainContactDiv>
    </Layout>
  );
};

export const Head = () => <Seo title="AliMahmoodi Contact Me" />;

export default ContactPage;
