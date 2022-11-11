import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi myName=\"David\"",
      "Passions are={ learning && coding }",
      "Enjoying life={maxValue} remoteWork={theBest}",
      "Hobbies instruments=\"guitar bass\"",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://ik.imagekit.io/ezcar/DavidVeraPhoto_5z8yTJWa3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667585261673"
        alt="David"
        width={128}
        height={128}
      />
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[1rem]">Full Stack Developer</h2>
      <h1 className="text-3xl lg:text-4xl font-semibold px-10 z-10">
        {'<'}
        <span className="mr-2">{text}</span>
        <Cursor cursorColor="#f7ab0a"/>
        {'/>'}
      </h1>
      
    </div>
  )
}

export default Hero