/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import React from 'react'
import appPic from "../../public/images/Wood-Hand.svg"
import AnimatedText from '@/components/AnimatedText'


export default function Home() {
  return (
    <main className=" flex  text-dark w-full min-h-screen">
      <div className='pt-0'>
        <div className='flex items-center justify- w-full'>
          <div className='w-3/5 flex flex-col items-center self-center'>
              <AnimatedText 
                text="Discover innovative learning with cultural immersion and flexible access" 
                className='!text-5xl !text-right'  
              />
              <br />
              <br />
              <p className='my-4 px-4 text-base font-medium text-justify '>
                Alexandria is an open-source mobile application that will assist in managing learning, personalization, and sharing your drafts.
              </p>
          </div>
          <div className='w-2/5'>
            <Image src={appPic} alt='codeBucks' className='w-full' />
          </div>
        </div>
      </div>
    </main>
  )
}
