import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About () {
    const skills = [
        "C/C++",
        "Data Structures",
        "Spring Boot",
        "React & Bootstrap",
        "MySQL & MongoDB",
    ]
    return (
        <div className="py-10">
            <SectionTitle title="About" />

            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full px-10 py-10">
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
                    Maintained Web application using Spring Boot, Restful Web 
                    Services for a Commercial Gas Industry client. 
                    </p>
                    <p>
                    Analyze and maintain GUI performance for Autodesk Inventor 
                    Nastran application. 
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-tertiary text-xl">The technolgies I'm currently working with : 
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