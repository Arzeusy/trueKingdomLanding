import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("dark");

    useEffect(() =>{
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handlechange = () => {
            if(usePref){
                let check = usePref === "dark"? "dark": "light";
                setMode(check);
                if (check === "dark"){
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                let check = mediaQuery.matches ? "dark": "light";
                setMode(check)
                if (check === "dark"){
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        };
        mediaQuery.addEventListener("change", handlechange);
        return () => mediaQuery.removeEventListener("change", handlechange);
    },[]);

    useEffect(()=>{
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    },[mode]);

    return [mode, setMode] as const;
};

export default useThemeSwitcher;