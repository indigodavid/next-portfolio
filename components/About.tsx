import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
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
        src="https://ik.imagekit.io/ezcar/IMG_3082_Nx7B-1dYR.HEIC"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id iusto dolor, eos molestias neque vitae saepe eveniet cupiditate nihil temporibus reiciendis commodi esse ex explicabo architecto autem hic iure! Quidem ullam nulla recusandae similique tempore officia veritatis labore quisquam vero, nihil rem natus ipsam et debitis quo dignissimos asperiores!
        </p>
      </div>
    </motion.div>
  )
}

export default About