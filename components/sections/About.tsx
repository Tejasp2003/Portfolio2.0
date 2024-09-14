"use client";

import React from "react";
import { HeroHighlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";
import { FloatingDock } from "../ui/floating-dock";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { FlipWords } from "../ui/flip-words";

const roleList = [
  "Full Stack Developer",
  "React.js Developer",
  "React Native Developer",
  "Software Developer",
];

const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Tosha24",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/tosha24/",
  },
  {
    title: "Leetcode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://leetcode.com/Tosha24/",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://twitter.com/tosha_patel30",
  },
  {
    title: "Repixify",
    icon: (
      <Image
        src="/assets/icons/repixify.png"
        alt="Repixify"
        width={20}
        height={20}
      />
    ),
    href: "https://www.repixify.com/",
  },
];

const About = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <section
      id="about"
      onMouseOver={() => setActiveTab("About")}
      className="h-screen  relative"
    >
      <div className="h-screen flex overflow-x-hidden ">
        <div className="w-full h-full">
          <HeroHighlight containerClassName="rounded-3xl dark:bg-gray-950 h-screen p-20 w-full">
            <div className="flex flex-col items-center justify-center w-full z-10 relative gap-8">
              <div
                about="name"
                className="w-full h-full lg:w-full lg:h-full flex items-center justify-center flex-col"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg  tracking-wide text-textGreen"
                >
                  Hi 👋, I'm
                </motion.h3>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-4xl lg:text-7xl font-titleFont font-semibold flex flex-col text-center text-nowrap"
                >
                  Tosha Patel
                </motion.h1>
                <div className="flex justify-center items-center text-2xl w-full lg:text-6xl mt-6  pb-1 px-1 rounded-xl ">
                  <FlipWords
                    words={roleList}
                    className="w-full text-center font-semibold text-textLight bg-gray-800 rounded-xl p-2"
                  />
                </div>
              </div>

              <div
                className="flex justify-center items-center flex-col cursor-pointer"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                <div className="relative md:w-16 md:h-28 sm:w-16 sm:h-24 w-12 h-20 border-4 border-yellow-100 rounded-[60px] mt-5">
                  <div className="absolute w-4 h-4 bg-red-200 rounded-full left-1/2 transform -translate-x-1/2 top-7 animate-mouse"></div>
                </div>
                <span className="text-yellow-100 text-lg mt-2">
                  Scroll down
                </span>
                <div className="mt-4">
                  <FloatingDock
                    mobileClassName="translate-y-20"
                    items={links}
                  />
                </div>
              </div>
            </div>
          </HeroHighlight>
        </div>
      </div>
    </section>
  );
};

export default About;
