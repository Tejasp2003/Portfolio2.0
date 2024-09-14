"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { PiSuitcaseBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa6";
import { CgBrowser } from "react-icons/cg";
import { IoMail } from "react-icons/io5";

export function FloatingNavDemo({ activeTab }: { activeTab: string; }) {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <FaLaptopCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <CgBrowser className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <PiSuitcaseBold className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IoMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} activeTab={activeTab}/>
    </div>
  );
}