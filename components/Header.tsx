import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/davidveracastillo"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://linkedin.com/in/davidveracastillo"
          bgColor="transparent"
          fgColor="gray"
        /> 
        <SocialIcon
          url="https://linkedin.com/in/davidveracastillo"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer">
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex">Get in Touch</p>
      </motion.div>
    </header>
  )
}

export default Header