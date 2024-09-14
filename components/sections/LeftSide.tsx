import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="w-[2px] h-full bg-textDark"></div>
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/Tosha24"
          target="_blank"
          className="text-xl w-10 h-10 rounded-full bg-hoverColor inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <span>
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/tosha24/"
          target="_blank"
          className="w-10 h-10 text-xl rounded-full items-center justify-center inline-flex bg-hoverColor cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300"
        >
          <span>
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href="https://leetcode.com/Tosha24/"
          target="_blank"
          className="w-10 h-10 rounded-full items-center justify-center inline-flex bg-hoverColor text-xl hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <span>
            <SiLeetcode />
          </span>
        </a>
        <a
          href="https://twitter.com/tosha_patel30"
          target="_blank"
          className="w-10 h-10 rounded-full items-center justify-center inline-flex bg-hoverColor text-xl hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <span>
            <FaXTwitter />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-[30%] bg-textDark"></div>
    </div>
  );
};

export default LeftSide;