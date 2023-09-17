import React from "react";
import AnimatedText from "@/components/AnimatedText"; 
import AnimatedNumbers from "@/components/AnimatedNumbers"; 
import Image from 'next/image'
import ProfilePic from '../../../public/images/profile/me.jpeg';
import Skills from "@/components/skills"; 
import ExperienceTree from "@/components/ExperienceTree";



const me = () => {
    return(
        <>
            <title>True kingdom | About me</title>
            <div className="flex w-full flex-col items-center justify-center px-12 ">
                <div className=" pt-4">
                     <AnimatedText text="Passion Fuels purpose!" className="text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl dark:text-light"  /> 
                </div>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 pt-16 text-dark/75 dark:text-light/75">
                    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 lg:order-2">
                        <h2 data-testid="SubTitle" className="mb-4 text-lg font-bold uppercase ">Biography</h2>
                        <h4 className="text-lg font-medium"> Hi, I&apos;m Yeicob. Nice to meet you. </h4>
                        <p className="font-medium my-4 text-justify">
                        Since taking my first steps as a developer in both back-end and front-end roles about 4 years ago, I&apos;ve had the opportunity to work with some of the most cutting-edge technologies in the world of development. My journey encompasses experiences in remote development teams and collaboration to craft comprehensive digital solutions. 
                        </p>
                        <p className="font-medium my-4 text-justify">
                        possess a calm confidence in my abilities, an innate curiosity that propels me to keep learning, and an unwavering dedication to honing my skills by solving developmental challenges. Moreover, I&apos;m currently delving into the realm of DevOps culture, allowing me to grasp the critical intersection between development and operations. My experience spans from collaborations with development companies to being a part of the internal teams of renowned brands, providing me with a diverse perspective in the creation and delivery of technological solutions.
                        </p>
                    </div>
                    <div className="col-span-3 xl:col-span-4 lg:col-span-8 lg:order-1 ">
                        <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-gray-100 p-8 dark:border-light/75 dark:bg-dark/90 lg:w-2/3 m-auto sm:w-full">
                            <div className=" absolute top-0 -right-3 z-[-1] w-[102%] h-[102%] rounded-2xl bg-dark dark:bg-light/75 " />
                            <Image src={ProfilePic} alt="Arzeusy" className=" w-full h-auto rounded-lg "
                                priority={true}
                                placeholder="blur"
                                blurDataURL={"../../../public/images/profile/me.jpeg"}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px 50vw, 50vw)"
                                />
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center lg:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"> 
                                <AnimatedNumbers value={20}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                Recived Certifications 
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"> 
                                <AnimatedNumbers value={12}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                Experienced Frameworks
                            </h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                Years of experience
                            </h2>
                        </div>
                    </div>
                </div>

                <Skills />
            </div>
            <div className="z-0 h-full p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-2 pt-16" >
                <ExperienceTree />
            </div>
        </>
    )

};

export default me;