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
import "./Curriculum.css";
import "../styles/style.css";

function Curriculum({props}) {
    return(
        <div className="page page-size page-border">
            <div className="left-side">
                <div>
                    <Name {...userData}></Name>
                    <Job {...userData}></Job>
                </div>
                <Contact {...userData.contact}></Contact>
                <Skills {...userData}></Skills>
                <Others {...userData}></Others>
                <Language {...userData}></Language>
                <Certification {...userData}></Certification>
            </div>
            <div className="right-side">
                <Objective {...userData}></Objective>
                <Education {...userData}></Education>
                <WorkExperience {...userData}></WorkExperience>
            </div>
        </div>
    );
}

export default Curriculum;