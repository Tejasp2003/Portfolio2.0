import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";

const Coreway = () => {
  return (
    <div className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@Coreway Solutions</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 - September 2022
      </p>
      <ul className="mt-6 flex flex-col">
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          During my time in Coreway Solutions, I developed a website called
          RestroRush.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>
          This website was built using HTML, CSS and Boostrap, showing my
          proficiency in front-end web development.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          I focused on creating an engaging and responsive user interface,
          incorporating various styling elements and layout techniques.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          The end result was a visually appealing and user-friendly website that
          effectively conveyed the concept of RestroRush.
        </li>
      </ul>
    </div>
  );
};

export default Coreway;
