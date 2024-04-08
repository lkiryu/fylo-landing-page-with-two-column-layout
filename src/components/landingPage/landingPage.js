import React from "react";
import Header from "../header/header";
import Hero from "../sectionHero/sectionHero";
import SectionStayProductive from "../sectionStayProductive/sectionStayProductive";
import EarlyAccess from "../earlyAccess/earlyAccess";

const LandingPage = () =>{
    return(
        <main className="container">
            <Header />

            <Hero />

            <SectionStayProductive />

            <EarlyAccess />
        </main>
    )
}

export default LandingPage