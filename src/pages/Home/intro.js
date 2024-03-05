import React, { useRef } from "react";
import './intro.css';

function Intro() {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='intro-container'>
            <h1 className='text-white py-10'>Hi, my name is</h1>
            <h1 className='text-8xl sm:text-3xl text-secondary font-semibold'>Prithviraj</h1>
            <h1 className='text-7xl sm:text-3xl text-white font-semibold'> 
                This is my new portfolio website.
            </h1>
            <p className='text-white w-2/3 py-10'>This website uses CSS tailwind for styling.</p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded" onClick={scrollToAbout}>Get started</button>

            <div ref={aboutRef}></div>
        </div>
    );
}

export default Intro;
