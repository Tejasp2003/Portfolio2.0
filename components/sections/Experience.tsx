import React, { useState } from "react";
import Coreway from "./Experiences/Coreway";

const Experience = ({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) => {
  const [workCoreway, setWorkCoreway] = useState(true);

  const handleWork = (work: string) => {
    if (work == "Cognizant") {
      setWorkCoreway(false);
    } else {
      console.log("");
    }
  };

  return (
    <section
      id="experience"
      className="w-full py-28 p-10 min-h-screen relative  bg-grid-small-gray-800 shadow-inner shadow-neutral-900"
      onMouseOver={() => setActiveTab("Experience")}
    >
      <h1 className="text-5xl font-bold text-center text-textLight mb-10">
        Work Experience 💼
      </h1>

      <div className="w-full md:w-[70%] lg:w-1/2 mx-auto mt-20">
        <div className="w-[100%] flex flex-col md:flex-row gap-10 md:gap-1">
          <ul className="flex flex-col">
            <li
              onClick={() => handleWork("Coreway")}
              className={` ${
                workCoreway
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8 font-medium tracking-wide`}
            >
              Coreway Solutions
            </li>
          </ul>
          {workCoreway && <Coreway />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
