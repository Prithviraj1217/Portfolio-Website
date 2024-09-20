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
            <h1 className='text-white py-5'>Hi , my name is</h1>
            <h1 className='text-8xl sm:text-3xl text-secondary font-semibold'>Prithviraj</h1>
            <h1 className='text-7xl sm:text-2xl text-white font-semibold'> 
                Welcome to my website
            </h1>
            <p className='text-white w-2/3 py-5'>This site is designed using Javascript and Tailwind CSS</p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded" onClick={scrollToAbout}>Get started</button>

            <div ref={aboutRef}></div>
        </div>
    );
}

export default Intro;
