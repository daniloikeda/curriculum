import React from "react";
import Name from "../components/leftside/Name";
import Job from "../components/leftside/Job";
import Contact from "../components/leftside/Contact";
import Skills from "../components/leftside/Skills";
import Others from "../components/leftside/Others";
import Language from "../components/leftside/Language";
import Certification from "../components/leftside/Certification";
import userData from "../services/data-english";
import Objective from "../components/rightside/Objective";
import Education from "../components/rightside/Education";
import WorkExperience from "../components/rightside/WorkExperience";
import "../styles/style.css";
import "../styles/leftside.css";
import "../styles/rightside.css";

const Curriculum = () =>
    <main>
        <div className="curriculum-page">
            <section className="left-side">
                <header>
                    <Name {...userData}></Name>
                    <Job {...userData}></Job>
                    <Contact {...userData.contact}></Contact>
                </header>
                <section className="professional-skills">
                    <Skills {...userData}></Skills>
                    <Others {...userData}></Others>
                    <Language {...userData}></Language>
                    <Certification {...userData}></Certification>
                </section>
            </section>
            <section className="right-side">
                <Objective {...userData}></Objective>
                <Education {...userData}></Education>
                <WorkExperience {...userData}></WorkExperience>
            </section>
        </div>
    </main>

export default Curriculum;