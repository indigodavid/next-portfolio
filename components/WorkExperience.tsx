import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-end md:justify-evenly mx-auto items-center"
  >
    <h3 className="sectionHeader">
      Experience
    </h3>
    <div className="w-full flex space-x-5 overflow-x-scroll mt-5 md:mt-20 p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      {experiences?.map((experience) => (
        <ExperienceCard key={experience._id} experience={experience} />
      ))}
    </div>
  </motion.div>
);

export default WorkExperience;
