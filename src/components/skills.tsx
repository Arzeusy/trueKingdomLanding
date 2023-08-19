"use client";


import React from "react";
import {motion} from "framer-motion";

const Skill = ({name, x, y}:any) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer" 
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            animate={{x:x, y:y}}
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
            <h2 className="font-bold text-8xl mt-64 text-center">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-CircicularLight">
                <Skill name="CSS" x="-8vw" y="-10vw" />
                <Skill name="Web" x="-2vw" y="0" />
            </div>
        </>
    )

}

export default Skills;

