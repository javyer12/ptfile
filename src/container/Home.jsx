import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Heading from "../components/Heading";
// import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
      return (
            <>
                  <Heading />
                  <Header />
                  <Nav />
                  <About />
                  <Experience />
                  {/* <Services /> */}
                  <Portfolio />
                  {/* <Testimonials /> */}
                  <Contact />
                  <Footer />
            </>

      )
}
export default Home;
