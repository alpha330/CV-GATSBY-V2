import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const AboutPage = ({location}) => {
    const setTitle= "About"
    const AboutHead = styled.div`
      height:4%;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      
    `
    const TermAbout = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:row;
      height:20%;
    `

    const Paragraph = styled.p`
      width:60%;
      height:100%;
      margin:0;
      padding:1.2rem 0;
    `
    return (
      <Layout title={setTitle} location={location}>
          <main>
            <AboutHead>
            <h1>About Me</h1>
            </AboutHead>
            
            <TermAbout>
              <StaticImage
              src="../images/learning.jpg"
              alt="learning"
              className="About_learning"
              />
              <Paragraph>
              I will always remain a student. As the CEO, Technical Manager and IT  Manager Network Administrator, and System Administrator in various large   companies, I have had the privilege of collaborating with my colleagues..   Let's start scrolling and learn more about me.
              </Paragraph>
            </TermAbout>
            
            <TermAbout>
            <Paragraph>
            Born in Kerman city on December 1st, 1984.after completing high school and being accepted into commercial pilot training courses, I entered the aviation industry. I pursued my CPL (Commercial Pilot License) with 138 hours of flight time, consisting of both Cherokee Piper and simulator flights.
            </Paragraph>
            <StaticImage
              src="../images/profilepic.jpg"
              alt="learning"
              className="About_Profile"
            />
            </TermAbout>
            
            <Link to="/">Back to Home</Link>
          </main>
      </Layout>

    );
};

export default AboutPage;
