"use client";

import React from "react";
import { motion } from "framer-motion"

const SocialLinks = () => {
    return (
        <>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >T</motion.a>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >T</motion.a>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >T</motion.a>
            <motion.a
                    href="/" target={"_blanck"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9}}
                    className="w-6 mr-3"
            >T</motion.a>
        </>
    );
}

export default SocialLinks;