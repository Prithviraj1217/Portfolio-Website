import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Project from "./Project";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Sider from "./Sider";

function Home () {
    return (
        <div>
            <Header />
            <div className="bg-primary px-40 sm:px-5">
                <Intro />
                <About />
                <Experiences />
                <Project />
                <Courses />
                <Contact />
                <Footer />
                <Sider />
            </div>
        </div>
    )
}

export default Home;