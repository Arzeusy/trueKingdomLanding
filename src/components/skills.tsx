"use client";


import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

const Skill = ({name, x, y}:any) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          dark:bg-light/80 dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
          xs:font-bold
          " 
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            animate={{x: x, y: y }}
            transition={{duration: 1.5}}
            viewport={{once:true}}
        >
                    {name}
        </motion.div>
    )
}

const Skills = ()=>{
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 text-center dark:text-light md:text-6xl md:mt-32">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-CircularLight dark:bg-CircularDark
                lg:bg-CircularLightLg lg:dark:bg-CircularDarkLg
                md:bg-CircularLightMd md:dark:bg-CircularDarkMd
                sm:bg-CircularLightSm sm:dark:bg-CircularDarkSm
            ">
                <Skill name="Web" x="0" y="0" />

                <Skill name="React" x="0vw" y="-12vw" />
                <Skill name="Angular" x="16vw" y="6vw" />
                <Skill name="Vue" x="-16vw" y="6vw" />
                
                <Skill name="Django" x="-32vw" y="14vw" />
                <Skill name="Rest Framework" x="-32vw" y="-14vw" />
                <Skill name="Flutter" x="32vw" y="-14vw" />
                <Skill name="Aionic" x="32vw" y="14vw" /> 
                <Skill name=".NET Core" x="0vw" y="24vw" /> 
            </div>
        </>
    )

}

export default Skills;

