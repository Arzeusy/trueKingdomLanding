import React from "react";
import AnimatedText from "@/components/AnimatedText"; 
import AnimatedNumbers from "@/components/AnimatedNumbers"; 
import Image from 'next/image'
import ProfilePic from '../../../public/images/profile/me.jpeg';
import Skills from "@/components/skills"; 
import ExperienceTree from "@/components/ExperienceTree";



const Projects = () => {
    return(
        <>
            <title>True kingdom | About me</title>
            <div className="flex w-full flex-col items-center justify-center px-12 ">
                <div className=" pt-4">
                     <AnimatedText text="Passion Fuels purpose!" className=" text-8xl"  /> 
                </div>
                {/* <br /> */}
                <div className="grid w-full grid-cols-8 gap-16 pt-16 ">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 data-testid="SubTitle" className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                        <h4 className="text-lg font-medium"> Hi, I&apos;m Yeicob. Nice to meet you. </h4>
                        <p className="font-medium my-4 text-justify">
                        Since taking my first steps as a developer in both back-end and front-end roles about 4 years ago, I&apos;ve had the opportunity to work with some of the most cutting-edge technologies in the world of development. My journey encompasses experiences in remote development teams and collaboration to craft comprehensive digital solutions. 
                        </p>
                        <p className="font-medium my-4 text-justify">
                        possess a calm confidence in my abilities, an innate curiosity that propels me to keep learning, and an unwavering dedication to honing my skills by solving developmental challenges. Moreover, I&apos;m currently delving into the realm of DevOps culture, allowing me to grasp the critical intersection between development and operations. My experience spans from collaborations with development companies to being a part of the internal teams of renowned brands, providing me with a diverse perspective in the creation and delivery of technological solutions.
                        </p>
                    </div>
                    <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-gray-100 p-8">
                        <div className=" absolute top-0 -right-3 z-[-1] w-[102%] h-[102%] rounded-2xl bg-dark " />
                        <Image src={ProfilePic} alt="Arzeusy" className=" w-full h-auto rounded-lg "/>
                    </div>
                    <div className=" col-span-2 flex flex-col items-center justify-between">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold"> 
                            <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">
                                Satisfied Clients
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold"> 
                                <AnimatedNumbers value={40}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">
                                Projects Completed
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold text-center">
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">
                                Years or experience
                            </h2>
                        </div>
                    </div>
                </div>

                <Skills />

            </div>
            <div>
                <ExperienceTree/>

            </div>
        </>
    )

};

export default Projects;