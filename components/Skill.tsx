import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

const Skill = ({ skill, directionLeft }: Props) => (
  <div className="group relative flex cursor-pointer">
    <motion.img
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      src={urlFor(skill.image).url()}
      alt="Skill"
      className="rounded-lg bg-white border border-gray-500 object-contain w-12 h-12 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
    />
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-slate-700 w-16 h-16 md:w-24 md:h-24 rounded-lg z-0">
      <div className="flex items-center justify-center h-full">
        <p className="text-sm sm:text-lg font-bold text-white opacity-100">{skill.title}</p>
      </div>
    </div>
  </div>
);

export default Skill;
