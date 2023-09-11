"use client";
import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({position, company, companyLink, time, address, work}:any) => {
    const refDetail = useRef(null)

    return (
        <li ref={refDetail}  className="my-8 firs:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
            <LiIcon reference={refDetail} />
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl  ">
                    {position}
                    &nbsp; 
                    <a 
                        href={companyLink} 
                        target="_blank"
                        className=" text-primaryDark dark:text-primary capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className=" capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>
                <p className=" font-medium w-full ">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const ExperienceTree = () =>{
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start start"],
        layoutEffect: false
    });

    return (
        <div className="my-64 dark:text-light" >
            <h2 className="font-bold text-8xl w-full text-center ">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative ">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl "
                ></motion.div>
                <ul className="w-full flex flex-col items-start justify-between  ">
                    <Detail 
                        position="Full-stack Engineer" 
                        company="Cyan Coders" 
                        companyLink="" 
                        time="2022 - present"  
                        address="Guatemala"
                        work=" lorem ipsum jjjjjj"
                    />
                    <Detail 
                        position="Full-stack Engineer" 
                        company="Cyan Coders" 
                        companyLink="" 
                        time="2022 - present"  
                        address="Guatemala"
                        work=" lorem ipsum jjjjjj"
                    />
                    <Detail 
                        position="Full-stack Engineer" 
                        company="Cyan Coders" 
                        companyLink="" 
                        time="2022 - present"  
                        address="Guatemala"
                        work=" lorem ipsum jjjjjj"
                    />
                    <Detail 
                        position="Full-stack Engineer" 
                        company="Cyan Coders" 
                        companyLink="" 
                        time="2022 - present"  
                        address="Guatemala"
                        work=" lorem ipsum jjjjjj"
                    />
                    <Detail 
                        position="Full-stack Engineer" 
                        company="Cyan Coders" 
                        companyLink="" 
                        time="2022 - present"  
                        address="Guatemala"
                        work=" lorem ipsum jjjjjj"
                    />
                </ul>
            </div>

        </div>
    )
}


export default ExperienceTree;