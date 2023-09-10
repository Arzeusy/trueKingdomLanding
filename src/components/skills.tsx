"use client";


import React from "react";
import {motion} from "framer-motion";

const Skill = ({name, x, y}:any) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          dark:bg-light/80 dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute" 
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
            <h2 className="font-bold text-8xl mt-64 text-center dark:text-light">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-CircularLight dark:bg-CircularDark">
                <Skill name="Web" x="0" y="0" />

                <Skill name="React" x="0vw" y="-8vw" />
                <Skill name="Angular" x="12vw" y="3vw" />
                <Skill name="Vue" x="-12vw" y="3vw" />
                
                <Skill name="Django" x="-20vw" y="12vw" />
                <Skill name="Rest Framework" x="-20vw" y="-12vw" />
                <Skill name="Flutter" x="20vw" y="-12vw" />
                <Skill name="Aionic" x="20vw" y="12vw" /> 
                <Skill name=".NET Core" x="0vw" y="18vw" /> 
            </div>
        </>
    )

}

export default Skills;

