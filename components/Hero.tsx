import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi myName={<${pageInfo?.name} />}`,
      'Passions are={ learning && coding }',
      'Enjoying life={maxValue} remoteWork={theBest}',
      'Hobbies instruments="guitar bass"',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-20">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="David"
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[1rem]">
          {pageInfo?.role ? pageInfo?.role : 'Software Developer' }
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          {'<'}
          <span className="mr-2 font-mono">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
          {'/>'}
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton" type="button">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton" type="button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton" type="button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton" type="button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
