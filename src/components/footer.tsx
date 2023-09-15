import Link from "next/link";
import React from "react";
import CustomLink from "./customLink";

const Footer =() =>{
    return (
        <footer className="w-full bg-light  font-medium text-lg lgi:fixed lgi:bottom-0 dark:bg-black  ">
            <div className="py-8 px-3 flex items-center justify-center dark:text-light ">
                <div>
                    <Link href="https://github.com/Arzeusy/alejandria" target="_blanck">Github</Link>
                </div>
                <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-neutral-700"></div>
                <div className="flex items-center">
                    {/* <span>&nbsp; &nbsp; </span> */}
                    <span>Made with</span>
                    <span className="text-primary text-2xl px-1 "> &#9825;</span>
                    by&nbsp; 
                    <CustomLink href="https://twitter.com/arzeus_y" title="Arzeusy" target="_blank" />
                </div>
            </div>
        </footer>
    );
};

    
export default Footer;