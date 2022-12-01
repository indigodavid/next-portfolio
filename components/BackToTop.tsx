import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = {}

const BackToTop = (props: Props) => (
  <Link href="#hero">
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center ml-5">
        <Image
          className="h-10 w-10 bg-accent rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          src="https://ik.imagekit.io/ezcar/Hands-One-Finger-icon_KDPHQ0LRz.png"
          alt="Up"
          width={40}
          height={40}
        />
      </div>
    </footer>
  </Link>
);

export default BackToTop;
