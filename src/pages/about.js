import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({location}) => {
    const setTitle= "About"

    return (
      <Layout title={setTitle} location={location}>
          <main>
            <h1>About Me</h1>
            <p>سلام! من در اینجا درباره فناوری اطلاعات و تکنولوژی می‌نویسم.</p>
            <Link to="/">برگشت به صفحه اصلی</Link>
          </main>
      </Layout>

    );
};

export default AboutPage;
