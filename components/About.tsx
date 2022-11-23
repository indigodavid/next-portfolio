import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-lg md:w-96 md:h-96 xl:w-[30rem] xl:h-auto"
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background
        </h4>
        <p className="text-sm">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default About