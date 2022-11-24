import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 container md:w-[38em] xl:w-[56em] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[13em] xl:h-[13em] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 container md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="h-10 w-10 rounded-full"
              alt={technology.title}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-32 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
          {experience?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard