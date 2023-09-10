import Link from "next/link";
import React from "react";
import Logo from './logo';
import CustomLink from './customLink';
import SocialLinks from './socialLinks';
import { motion } from "framer-motion"

const NavBar = () => {

    return (
        <header className=" bg-light dark:bg-black/40 w-full px-32 py-8 font-medium flex items-center justify-between 
             dark:text-light
        ">
            <nav>
                <CustomLink href="/" title="Alejandria" className="mr-4" />
                <CustomLink href="/me" title="Arzeusy" className="mr-4" />
                <CustomLink href="/projects" title="Projects" className="mr-4" />
            </nav>
            <Logo></Logo>
            <nav className="flex items-center justify-center flex-wrap ">
                <SocialLinks></SocialLinks>
            </nav>
        </header>
    )
};

export default NavBar