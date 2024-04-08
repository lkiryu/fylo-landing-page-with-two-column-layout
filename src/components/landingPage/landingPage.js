import React from "react";
import Header from "../header/header";
import Hero from "../sectionHero/sectionHero";
import SectionStayProductive from "../sectionStayProductive/sectionStayProductive";

const LandingPage = () =>{
    return(
        <main className="container">
            <Header />

            <Hero />

            <SectionStayProductive />
        </main>
    )
}

export default LandingPage