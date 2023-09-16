import Link from "next/link";
import React from "react";
import Image from 'next/image';
import { readConfigFile } from "typescript";
import tkIcon from './../../public/tk.svg';

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <Link href="/" className="w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-2xl font-bold
               border border-solid border-transparent dark:border-light
            ">
                <Image src={tkIcon} alt="true kingdom logo" className="w-12 h-12" priority={true} />
            </Link>
        </div>
    )
}

export default Logo