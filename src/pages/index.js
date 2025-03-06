import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import DevOps from "./../images/devops.png"
import Netwokr from "./../images/network.jpg"
import Programming from "./../images/programing.jpg"
import BlockChain from "./../images/Blockhcain.jpg"
import Management from "./../images/management.jpg"
import { StaticImage } from "gatsby-plugin-image"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const MainIndexDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:row;
    .LogoCompany{
      width:55px;
      height:55px;
    }
    .LogoCompanyLight{
      width:15rem;
      height:auto;
    }
      `;

  const SkillItemsDevOPS = styled.div`
    width:20rem;
    height:40rem;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.34),rgba(0, 0, 0, 0.34)),url(${DevOps});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    transition: all 800ms ease;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    padding:2rem;
    border-radius:5px;
    animation: indexItemDevopsAndManagement 1s ease;
    &:hover {
      width:100%;
      height:90%;
      z-index:1000;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      flex-direction:column;
      background-image: linear-gradient(to right,rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.74)),url(${DevOps});
    }
    &:hover h1 {
      top:5%;
      left:50%;
      font-size:3rem;
      transform: rotate(0);
      
    }
    &:hover h2 {
      font-size:1rem;
      display:block;
      font-weight:400;
    }
    &:hover div {
      display:block;
    }
  `

  const SkillItemsNetwork = styled.div`
    width:20rem;
    height:40rem;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.34),rgba(0, 0, 0, 0.34)),url(${Netwokr});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    transition: all 800ms ease;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    padding:2rem;
    border-radius:5px;
    animation: indexItemDevopsAndManagement 2s ease;
    &:hover {
      width:100%;
      height:90%;
      z-index:1000;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      flex-direction:column;
      background-image: linear-gradient(to right,rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.74)),url(${Netwokr});
    }
    &:hover h1 {
      top:5%;
      left:50%;
      font-size:3rem;
      transform: rotate(0);

    }
    &:hover h2 {
      font-size:1rem;
      display:block;
      font-weight:400;
    }

    &:hover div {
      display:block;
    }
  `

  const SkillItemsPrograming = styled.div`
    width:20rem;
    height:40rem;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.34),rgba(0, 0, 0, 0.34)),url(${Programming});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    transition: all 800ms ease;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    padding:2rem;
    border-radius:5px;
    animation: indexItemDevopsAndManagement 3s ease;
    &:hover {
      width:100%;
      height:90%;
      z-index:1000;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      flex-direction:column;
      background-image: linear-gradient(to right,rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.74)),url(${Programming});
    }
    &:hover h1 {
      top:5%;
      left:50%;
      font-size:3rem;
      transform: rotate(0);

    }
    &:hover h2 {
      font-size:1rem;
      display:block;
      font-weight:400;
    }
    &:hover div {
      display:block;
    }
  `

  const SkillItemsBlockchain = styled.div`
  width:20rem;
  height:40rem;
  background-image: linear-gradient(to right,rgba(0, 0, 0, 0.34),rgba(0, 0, 0, 0.34)),url(${BlockChain});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  transition: all 800ms ease;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow:hidden;
  padding:2rem;
  border-radius:5px;
  animation: indexItemDevopsAndManagement 2s ease;
  &:hover {
    width:100%;
    height:90%;
    z-index:1000;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.74)),url(${BlockChain});
  }
  &:hover h1 {
    top:5%;
    left:50%;
    font-size:3rem;
    transform: rotate(0);

  }
  &:hover h2 {
    font-size:1rem;
    display:block;
    font-weight:400;
  }
    &:hover div {
      display:block;
    }
  `

  const SkillItemsManagement = styled.div`
  width:20rem;
  height:40rem;
  background-image: linear-gradient(to right,rgba(0, 0, 0, 0.34),rgba(0, 0, 0, 0.34)),url(${Management});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  transition: all 800ms ease;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow:hidden;
  padding:2rem;
  border-radius:5px;
  animation: indexItemDevopsAndManagement 1s ease;
  &:hover {
    width:100%;
    height:90%;
    z-index:1000;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.74)),url(${Management});
  }
  &:hover h1 {
    top:5%;
    left:50%;
    font-size:3rem;
    transform: rotate(0);

  }
  &:hover h2 {
    font-size:1rem;
    display:block;
    font-weight:400;
  }
    &:hover div {
      display:block;
    }
  `

  const TitleSkill = styled.h1`
    color:black;
    transform: rotate(-90deg);
    text-align:center;
    padding:0;
    margin:0;
    font-size:4rem;
    transition: all 800ms ease;
    color:white;
    text-transform:capitalize;
  `
  const ContentSkill = styled.h2`
    display:none;
    color:black;
    text-align:center;
    padding:0;
    margin:0;
    font-size:2rem;
    transition: all 800ms ease;
    line-height: 2;
    animation: h2Index 10s ease;
    color:white;
    background:rgba(0, 0, 0, 0.541);
  `
  const ContentImportantSkilled = styled.div`
    width:100%;
    height:fit-content;
    padding:.5rem 0;
    display:none;
  `

  const Contentlist = styled.ul`
    list-style:none;
    color:black;
    padding:0;
    margin:0;
    font-size:2rem;
    transition: all 800ms ease;
    animation: h2Index 10s ease;
    color:white;
    background:rgba(255, 255, 255, 0.54);
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
  `
  const ContentlistItem = styled.li`
    color:black;
    text-align:center;
    padding:0;
    margin:0;
    font-size:2rem;
    transition: all 800ms ease;
    line-height: 2;
    animation: h2Index 10s ease;
    color:white;
    text-transform:uppercase;
  `

  return (
    <Layout location={location} title={siteTitle}>
      <MainIndexDiv>
        <SkillItemsDevOPS>
          <TitleSkill>
            DevOps
          </TitleSkill>
          <ContentSkill>
          These courses cover a broad range of networking topics, including network fundamentals, routing and switching, network security, and wireless networking. Participants learn through online lectures, interactive modules, virtual labs, and practice exams. The courses are designed to provide a comprehensive understanding of networking concepts and skills required for designing, implementing, and troubleshooting network infrastructures. CCNA Online Courses offer the flexibility to study at your own pace and provide access to a global community of learners and industry experts.
          </ContentSkill>
          <ContentImportantSkilled>
            <Contentlist>
              <ContentlistItem>
                <StaticImage src="./../images/logos/Docker-Emblem.png" alt="docker logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/esxi.png" alt="esxi logo" className="LogoCompany"  />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/git.png" alt="git logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/linux.png" alt="linux logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/windows.png" alt="windows logo" className="LogoCompany" />
              </ContentlistItem>
            </Contentlist>
          </ContentImportantSkilled>          
        </SkillItemsDevOPS>
        <SkillItemsNetwork >
          <TitleSkill>
          Network
          </TitleSkill>
          <ContentSkill>
          These courses cover a broad range of networking topics, including network fundamentals, routing and switching, network security, and wireless networking. Participants learn through online lectures, interactive modules, virtual labs, and practice exams. The courses are designed to provide a comprehensive understanding of networking concepts and skills required for designing, implementing, and troubleshooting network infrastructures. CCNA Online Courses offer the flexibility to study at your own pace and provide access to a global community of learners and industry experts.
          </ContentSkill>
          <ContentImportantSkilled>
          <Contentlist>
              <ContentlistItem>
                <StaticImage src="./../images/logos/ccna.png" alt="ccna logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/ccnp.png" alt="ccnp logo" className="LogoCompany"  />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/fortinet.png" alt="fortinet logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/mikrotik.png" alt="mikrotik logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/kerio.png" alt="kerio logo" className="LogoCompany" />
              </ContentlistItem>
          </Contentlist>
          </ContentImportantSkilled>          
        </SkillItemsNetwork>
        <SkillItemsPrograming >
          <TitleSkill>
          Programming
          </TitleSkill>
          <ContentSkill>
          These courses cover a broad range of networking topics, including network fundamentals, routing and switching, network security, and wireless networking. Participants learn through online lectures, interactive modules, virtual labs, and practice exams. The courses are designed to provide a comprehensive understanding of networking concepts and skills required for designing, implementing, and troubleshooting network infrastructures. CCNA Online Courses offer the flexibility to study at your own pace and provide access to a global community of learners and industry experts.
          </ContentSkill>
          <ContentImportantSkilled>
          <Contentlist>
              <ContentlistItem>
                <StaticImage src="./../images/logos/django.png" alt="django logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/python.png" alt="python logo" className="LogoCompany"  />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/js.png" alt="js logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/nextjs.png" alt="nextjs logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/reactjs.png" alt="reactjs logo" className="LogoCompany" />
              </ContentlistItem>
          </Contentlist>
          </ContentImportantSkilled>  
        </SkillItemsPrograming>
        <SkillItemsBlockchain >
          <TitleSkill>
          blockchain
          </TitleSkill>
          <ContentSkill>
          These courses cover a broad range of networking topics, including network fundamentals, routing and switching, network security, and wireless networking. Participants learn through online lectures, interactive modules, virtual labs, and practice exams. The courses are designed to provide a comprehensive understanding of networking concepts and skills required for designing, implementing, and troubleshooting network infrastructures. CCNA Online Courses offer the flexibility to study at your own pace and provide access to a global community of learners and industry experts.
          </ContentSkill>
          <ContentImportantSkilled>
          <Contentlist>
              <ContentlistItem>
                <StaticImage src="./../images/logos/django.png" alt="django logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/python.png" alt="python logo" className="LogoCompany"  />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/js.png" alt="js logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/nextjs.png" alt="nextjs logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/reactjs.png" alt="reactjs logo" className="LogoCompany" />
              </ContentlistItem>
          </Contentlist>
          </ContentImportantSkilled>
        </SkillItemsBlockchain>
        <SkillItemsManagement >
          <TitleSkill>
          Management
          </TitleSkill>
          <ContentSkill>
          These courses cover a broad range of networking topics, including network fundamentals, routing and switching, network security, and wireless networking. Participants learn through online lectures, interactive modules, virtual labs, and practice exams. The courses are designed to provide a comprehensive understanding of networking concepts and skills required for designing, implementing, and troubleshooting network infrastructures. CCNA Online Courses offer the flexibility to study at your own pace and provide access to a global community of learners and industry experts.
          </ContentSkill>
          <ContentImportantSkilled>
          <Contentlist>
              <ContentlistItem>
                <StaticImage src="./../images/logos/django.png" alt="django logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/python.png" alt="python logo" className="LogoCompany"  />
              </ContentlistItem>
              <ContentlistItem>
              <StaticImage src="./../images/logos/js.png" alt="js logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/nextjs.png" alt="nextjs logo" className="LogoCompany" />
              </ContentlistItem>
              <ContentlistItem>
                <StaticImage src="./../images/logos/reactjs.png" alt="reactjs logo" className="LogoCompany" />
              </ContentlistItem>
          </Contentlist>
          </ContentImportantSkilled>
        </SkillItemsManagement>        
      </MainIndexDiv>
    </Layout>
  )
}

export default HomeIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="AliMahmoodi Cv" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
