"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface IcustomLink {
    href: string,
    title: string,
    className?: string,
    target?: string,
    toggle?: Function, 
};

export default function CustomMobileLink({ title, href, target="_self", className = "", toggle }: IcustomLink) {
    const router = useRouter();
    const rout = usePathname();

    const handleClick = () =>{
        router.push(href);
        toggle!= undefined &&  toggle();
    };

    return (
        <button onClick={handleClick} className={`${className} relative group  text-light dark:text-dark my-2`} >
            {title}
            <span
                className={`
                    h-[1px] inline-bloc absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 bg-light dark:bg-dark
                    ${rout === href ? 'w-full':'w-0' }
                    `}>
                &nbsp;
            </span>
        </button>
    )
};
