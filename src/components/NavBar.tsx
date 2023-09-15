"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from './logo';
import CustomLink from './customLink';
import SocialLinks from './socialLinks';
import { motion } from "framer-motion"
import CustomMobileLink from "./customMobileLink";

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-light dark:bg-black w-full px-20 py-8 font-medium flex items-center justify-between 
             dark:text-light
        ">
            <button className="flex-col justify-center items-center hidden md:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1": "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${isOpen ? " opacity-0": "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? " -rotate-45 -translate-y-1": "translate-y-0.5"}`}></span>
            </button>
            <nav className="md:hidden">
                <CustomLink href="/" title="Alejandria" className="mr-4" />
                <CustomLink href="/me" title="Arzeusy" className="mr-4" />
            </nav>
            <Logo></Logo>
            <nav className="flex items-center justify-center flex-wrap md:hidden">
                <SocialLinks></SocialLinks>
            </nav>
            {
                isOpen && (
                    <motion.div 
                        initial={{scale:0, opacity:0, x:"-50%", y:"-50%" }}
                        animate={{scale:1, opacity:1}}
                        className=" min-w-[70vw] justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32 ">
                        <nav className=" flex items-center flex-col justify-center ">
                            <CustomMobileLink href="/" title="Alejandria" className="mr-4" toggle={handleClick} />
                            <CustomMobileLink href="/me" title="Arzeusy" className="mr-4"  toggle={handleClick}/>
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap  text-light dark:text-dark">
                            <SocialLinks></SocialLinks>
                        </nav>
                    </motion.div>
                )
            }
        </header>
    )
};

export default NavBar