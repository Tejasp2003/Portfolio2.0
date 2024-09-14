"use client";

import React, { useState } from "react";
import { FloatingNavDemo } from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";


const Page = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className=" overflow-x-hidden min-h-screen">
      <FloatingNavDemo activeTab={activeTab} />
      <About setActiveTab={setActiveTab} />
      <Skills setActiveTab={setActiveTab} />
      <Projects setActiveTab={setActiveTab} />
      <Experience setActiveTab={setActiveTab} />
      <Contact setActiveTab={setActiveTab} />
    </div>
  );
};

export default Page;
