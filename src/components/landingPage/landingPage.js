import React from "react";
import Header from "../header/header";
import Hero from "../sectionHero/sectionHero";
import SectionStayProductive from "../sectionStayProductive/sectionStayProductive";
import EarlyAccess from "../earlyAccess/earlyAccess";
import Footer from "../footer/footer";

const LandingPage = () =>{
    return(
        <main className="container">
            <Header />

            <Hero />

            <SectionStayProductive />

            <EarlyAccess />

            <Footer />
        </main>
    )
}

export default LandingPage