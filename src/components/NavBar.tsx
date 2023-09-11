"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from './logo';
import CustomLink from './customLink';
import SocialLinks from './socialLinks';
import { motion } from "framer-motion"

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-light dark:bg-black w-full px-32 py-8 font-medium flex items-center justify-between 
             dark:text-light
        ">
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1": "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${isOpen ? " opacity-0": "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? " -rotate-45 -translate-y-1": "translate-y-0.5"}`}></span>
            </button>
            <nav className=" lg:hidden">
                <CustomLink href="/" title="Alejandria" className="mr-4" />
                <CustomLink href="/me" title="Arzeusy" className="mr-4" />
                <CustomLink href="/projects" title="Projects" className="mr-4" />
            </nav>
            <Logo></Logo>
            <nav className="flex items-center justify-center flex-wrap lg:hidden">
                <SocialLinks></SocialLinks>
            </nav>

            <div className=" min-w-[70] justify-between items-center hidden lg:flex">
                
            </div>
        </header>
    )
};

export default NavBar