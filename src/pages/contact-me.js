import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({location}) => {
    const setTitle= "Contact Me"
    return (
      <Layout title={setTitle} location={location}>
          <main>
            <h1>Contact Me</h1>
            <p>می‌تونی از طریق ایمیل من باهام در ارتباط باشی: example@email.com</p>
            <Link to="/">برگشت به صفحه اصلی</Link>
          </main>
      </Layout>  
    );
};

export default ContactPage;
