"use client";
import React from "react";
import {motion} from "framer-motion";

const Detail = ({position, company, companyLink, time, address, work}:any) => {
    return (
        <li className="my-8 firs:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <div>
                <h3 className="capitalize font-bold text-2xl  ">{position} &nbsp; <a href={companyLink} >@{company}</a></h3>
                <span className=" capitalize font-medium text-dark/75 ">
                    {time} | {address}
                </span>
                <p className=" font-medium w-full ">
                    {work}
                </p>
            </div>
        </li>
    )
}

const ExperienceTree = () =>{
    return (
        <div className="my-64 ">
            <h2 className="font-bold text-8xl w-full text-center">
                Experience
            </h2>
            <div className="w-full mx-auto relative ">
                <ul>
                    <Detail 
                        position="Full-stack Engineer" 
                        company="CyanCoders" 
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