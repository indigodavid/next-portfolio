import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[125em] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionHeader">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        These are the development technologies I often work with.
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.sort((a, b) => (b.progress - a.progress)).map((skill, index) => (
          <Skill key={skill._id} skill={skill} directionLeft={Math.floor(index / 4) % 2 === 0} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills