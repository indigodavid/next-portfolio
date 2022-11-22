import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'
import Link from 'next/link'

type Props = {
  socials: Social[];
}

const Header = ({ socials }: Props) => {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            bgColor="transparent"
            fgColor="gray"
          />
        ))}
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
            url="#contact"
          />
        <p className="uppercase hidden md:inline-flex">
          <Link href="#contact">Get in Touch</Link>
        </p>
      </motion.div>
    </header>
  )
}

export default Header