/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import React from 'react'
import appPic from "../../public/images/Wood-Hand.svg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Footer from "../components/footer"


export default function Home() {
  return (
    <>
    <div className="flex  text-dark w-full min-h-full h-full dark:text-light ">
      <div className='py-4 sm:py-8'>
        <div className='flex items-center justify-center w-full lg:block'>
          <div className='w-3/5 flex flex-col items-center self-center lg:w-full lg:p-12 md:p-8 sm:p-4 '>
              <AnimatedText 
                text="Discover innovative learning with cultural immersion and flexible access" 
                className='!text-5xl !text-right dark:text-light 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl '  
              />
              <br />
              <br />
              <div className="w-full flex justify-end">
                <p className='my-4 px-4 text-base font-medium text-justify '>
                  Alexandria is an open-source mobile application that will assist in managing learning, personalization, and sharing your drafts.
                </p>
              </div>
              <div className='flex self-end items-center justify-end mt-2 w-full'>
                <Link className='mr-4 text-lg font-medium capitalize text-dark underline  dark:text-light ' href="mailto:jkob1994@gmail.com" >Contact</Link>
                <Link className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-transparent hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-transparent
                " href="" >Suscribe</Link>
              </div>
          </div>
          <div className='w-2/5 lg:w-full  '>
            <Image src={appPic} alt='Alejandria-app' className='w-2/3 mx-auto ' 
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    
    </div>
    <Footer/>

    </>
  )
}
