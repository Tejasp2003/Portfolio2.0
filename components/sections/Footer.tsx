// import React from 'react'

// const Footer = () => {
//   return (
//     <footer>
//         <div className="bg-black p-5 text-xl">
//             Footer
//         </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,

} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
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
  return (
    <div className="flex flex-row items-center justify-around bg-neutral-950 ">
    
      <div>
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </div>
  );
};

export default Footer;
