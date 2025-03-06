import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Inputs from "../components/Inputs/Inputs";
import Button from "../components/Button/Button";
import Seo from "../components/seo";

const ContactPage = ({location}) => {
    const setTitle= "Contact Me"
    const MainContactDiv = styled.div`
      width: 100%;
      height: 80vh;
      padding: 0 4rem;
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:column;
    `;
    const FormSection = styled.form`
      width: 50%;
      min-height:fit-content;
      max-height: 40vh;
      padding: 0 4rem;
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:column;
      border-radius:10px;
      margin:auto;
      background-color: #33333349;
    `;

    const DivInput = styled.div`
      width:fit-content;
      height:fit-content;
      padding:.5rem;
      text-align:center;
      text-transform:capitalize;
    `;
    return (
      <Layout title={setTitle} location={location}>
          <MainContactDiv>
            <h1>Contact Me</h1>
            <FormSection>
              <DivInput>
                <Inputs label={"first name"} type={"text"} nameFor={"firstName"}/>
              </DivInput>
              <DivInput>
                <Inputs label={"last name"} type={"text"} nameFor={"lastName"}/>
              </DivInput>
              <DivInput>
                <Inputs label={"email"} type={"email"} nameFor={"email"}/>
              </DivInput>
              <DivInput>
                <Inputs label={"content"} type={"textarea"} nameFor={"content"}/>
              </DivInput>
              <DivInput>
              <Button color="default">submit</Button>
              </DivInput>
              
            </FormSection>
          </MainContactDiv>
      </Layout>  
    );
};

export const Head = () => <Seo title="AliMahmoodi Contact Me" />

export default ContactPage;
