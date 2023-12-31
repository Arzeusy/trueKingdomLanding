"use client";
import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({position, company, companyLink, time, address, work}:any) => {
    const refDetail = useRef(null)

    return (
        <li ref={refDetail}  
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
                md:w-[80%] 
            ">
            <LiIcon reference={refDetail} />
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
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
                <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className=" font-medium w-full md:text-sm ">
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
            <h2 className="font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl md:mt-8 ">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full my-8">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
                    dark:bg-primaryDark dark:shadow-3xl md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                ></motion.div>
                <ul className="w-full flex flex-col items-start justify-between xs:ml-2  ">
                    <Detail 
                        position="Full-stack Engineer" 
                        company="CianCoders" 
                        companyLink="https://ciancoders.com/es/" 
                        time="Sept. 2019 - Feb. 2021"  
                        address="Quetgo.,Guatemala"
                        work="Worked as a Single Page Application (SPA) developer for several national companies, taking on challenges in all areas."
                    />
                   <Detail 
                        position="Front-end Developer" 
                        company="Walmart Centroamerica" 
                        companyLink="https://www.walmartcentroamerica.com/" 
                        time="Oct. 2020 - Feb. 2021"  
                        address="Quetgo.,Guatemala"
                        work="Worked on optimize UI/UX for seamless administrative software, improving user efficiency and ensuring smooth navigation and improved productivity ."
                    />
                    <Detail 
                        position="Analista Desarrollador Senior" 
                        company="Registro de Información Catastral" 
                        companyLink="https://portal.ric.gob.gt/" 
                        time="feb. 2021 - Oct. 2022"
                        address="Guatemala"
                        work="I had the responsibility of designing, developing, and maintaining software where my main focus is the development of administrative software. Additionally, I play a crucial role in resource management and report generation, thereby contributing to more efficient and data-driven cadastral management."
                    />
                    <Detail 
                        position="Gestor de proyectos" 
                        company="Ingenio la Union" 
                        companyLink="https://www.launion.com.gt/" 
                        time="Nov. 2022 - Actualidad"
                        address="Guatemala"
                        work="I work on a project with a long history of development, where the focus is on facilitating the onboarding, processing, and departure of personnel from various areas of the mill, taking into account legal requirements and providing information to personnel through reports, historical records, and policies."
                    />
                </ul>
            </div>

        </div>
    )
}


export default ExperienceTree;