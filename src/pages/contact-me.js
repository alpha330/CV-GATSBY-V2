import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Inputs from "../components/Inputs/Inputs";
import Button from "../components/Button/Button";
import Seo from "../components/seo";

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

const ContactPage = ({ location }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading,setLoading] = useState(false);

  const onChangeName = useCallback((e) => setName(e.target.value), []);
  const onChangeSurname = useCallback((e) => setSurname(e.target.value), []);
  const onChangeEmail = useCallback((e) => setEmail(e.target.value), []);
  const onChangeContent = useCallback((e) => setContent(e.target.value), []);

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const data = { to: "alimahmoodi22@gmail.com", subject: `New Contact Request${email}-${name}-${surname}`, text: content };
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log(result);
      if (response.ok) alert("Email sent successfully!");
      else alert("Error sending email");
      setLoading(false)
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
      setLoading(false)
    }
  };

  return (
    <Layout title="Contact Me" location={location}>
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
