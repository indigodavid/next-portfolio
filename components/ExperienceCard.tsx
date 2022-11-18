import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 container md:w-[38em] xl:w-[56em] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll">
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
        className="w-32 h-32 rounded-full xl:w-[13em] xl:h-[13em] object-cover object-center"
        src="https://dashboard.microverse.org/assets/icon-white-6545162e585bbcd21acdfc30fbb9763ac2a42226c6a436f234a7bc370d4bf50f.png"
      />
      <div className="px-0 container md:px-10">
        <h4 className="text-4xl font-light">Peer Mentor at Microverse</h4>
        <p className="font-bold text-2xl mt-1">Microverse</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <Image
            src="https://ik.imagekit.io/ezcar/DavidVeraNov2022_KDbSgVGgn.jpg"
            className="h-10 w-10 rounded-full"
            alt="Tech"
            width={40}
            height={40}
          />
          <Image
            src="https://ik.imagekit.io/ezcar/DavidVeraNov2022_KDbSgVGgn.jpg"
            className="h-10 w-10 rounded-full"
            alt="Tech"
            width={40}
            height={40}
          />
          <Image
            src="https://ik.imagekit.io/ezcar/DavidVeraNov2022_KDbSgVGgn.jpg"
            className="h-10 w-10 rounded-full"
            alt="Tech"
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started works... Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard