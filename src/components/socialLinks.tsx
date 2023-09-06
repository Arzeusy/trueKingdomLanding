"use client";

import React from "react";
import { motion } from "framer-motion"
import { GithubIcon, LinkedInIcon,  MoonIcon,  SunIcon, TwitterIcon } from "./icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const SocialLinks = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >
                <TwitterIcon  />
            </motion.a>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >
                <GithubIcon></GithubIcon>
            </motion.a>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >
                <LinkedInIcon></LinkedInIcon>
            </motion.a>
          
            <button 
                onClick={ ()=>{setMode(mode ==="light"? "dark":"light");}}
                className=" flex items-center justify-center rounded-full p-1 w-9 "
            >
                {
                    mode === "light" ? <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
            </button>
        </>
    );
}

export default SocialLinks;