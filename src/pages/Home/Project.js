import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import './Project.css'
function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div className='Projects-Container'>
            <SectionTitle title="Projects" />
            <div className="flex py-10 gap-5 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-2 border-[#BFA18160] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((project, index) => (
                        <div
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 
                            ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#BFA18120] py-3 sm:w-40' : 'text-white'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-90 justify-center sm:flex-col ">
                    <a href={projects[selectedItemIndex].Redirect}>
                    <img src={projects[selectedItemIndex].link} alt="" className="scale-75 overflow-hidden" />
                    </a>
                    
                    <div className="flex flex-col gap-5 px-5">
                        <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                        <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].description}</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project