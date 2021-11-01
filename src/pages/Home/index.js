import React from 'react';
import Experience from './Experience';
import Profile from './Profile';
import Skills from './Skills';
import Summary from './Summary';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Contact from './Contact';
export default function Home() {
    return (
        <>
            <Profile />
            <Summary />
            <Skills />
            <Experience />
            <Projects />
            <Hobbies />
            <Contact />
        </>
    )
}
