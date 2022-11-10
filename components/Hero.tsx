import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is David",
      "In love with learning and coding",
      "Enjoying life and remote work",
      "Playing guitar and bass in my free time"
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
      <h1 className="z-10">
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a"/>
      </h1>
    </div>
  )
}

export default Hero