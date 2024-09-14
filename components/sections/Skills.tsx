import { skillsSet } from "@/constants";
import Image from "next/image";
import React from "react";


const SkillButton: React.FC<{ skill: { name: string; icon: string } }> = ({
  skill,
}) => {
  return (
    <button className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200 border-2 border-gray-800">
      <Image src={skill.icon} alt={skill.name} width={20} height={20} />
      <span>{skill.name}</span>
    </button>
  );
};

const Skills = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <section
      id="skills"
      className="w-full py-16 p-4 sm:p-10 min-h-screen relative shadow-inner shadow-neutral-900"
      onMouseOver={() => setActiveTab("Skills")}
    >
      <h1 className="text-5xl font-bold text-center text-textLight mb-10">
        My Skills 🎓
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-transparent">
        {Object.keys(skillsSet).map((category) => (
          <div
            key={category}
            className="bg-[#030917] border-2 border-slate-900 shadow-md shadow-slate-900 rounded-lg p-6"
          >
            <h2 className="text-3xl font-bold text-gray-300 mb-4">
              {category}
            </h2>
            <div className="flex flex-wrap gap-4">
              {skillsSet[category].map((skill) => (
                <SkillButton key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
