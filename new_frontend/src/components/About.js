import React from "react";
import dahliavibes from "./dahliavibes.jpeg";

const About = () => {

    return (
        <div className="about"><h1>About the Creator</h1>
            <div className="dahliapic"></div><img src={dahliavibes} />
            <p>Hello, I'm Dahlia! I am a former Women's and Gender Studies professor-turned-
                software developer. After 15 years in academia, an international move, a pandemic, and a baby,
                I decided it was time for a career change. I have always loved logic, critical thinking, and
                puzzles. As an undergraduate I worked as an assistant to the digital librarian, so I had some, albeit dated,
                skills already up my sleeve. Through the support of the Scottish Digital Pipeline and
                Codeclan, I was able to begin my journey in February 2022 and I'm completing my
                program January 2023. Not bad for a year's work! </p>

            <p>
                Highlighing women, non-binary folx, and people of color in the STEM fields is a crucial
                assignment. Access to education as well as role models is a key element this. So this
                is my wee project, clearly influenced by my background in history and gender studies, I bring
                to you for the enhancement of all to enter into the tech field, no matter one's background,
                age, or parent-status. Because being a parent and doing anything else at all is hard.
            </p>
        </div>

    );
}

export default About;