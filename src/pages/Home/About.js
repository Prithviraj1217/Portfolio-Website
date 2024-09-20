import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About () {
    const skills = [
        "AI/ML",
        "MERN stack",
        "MFC Applications (C++, QT)",
        "Big Data Analytics",
        "CI/CD",
    ]
    return (
        <div className="py-10">
            <SectionTitle title="About" />

            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[50vh] w-1/2 sm:w-full px-10 py-10">
                <lottie-player src="https://lottie.host/604867a4-8444-4dda-b181-b827f1013f0a/zCWue2NAZl.json" background="#0A1828"
                speed="1"
                autoplay
                direction="1"
                loop
                mode="normal"
                ></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full text-white px-10 py-10">
                    <p>
                    Hello, <span><br/></span>I am a Software Developer from Bengaluru. I have 2 years of experience working on different technologies.
                    </p>
                    <p>
                    I'm interested in MERN stack development.
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-tertiary text-xl">Technolgies I'm interested in : 
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                {
                    skills.map((skill, index) => (
                        <div className="border border-tertairy py-3 px-10">
                            <h1 className="text-tertiary">{skill}</h1>
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    )
}

export default About;