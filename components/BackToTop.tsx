import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = {}

const BackToTop = (props: Props) => (
  <Link href="#hero">
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center ml-5">
        <HomeIcon className="h-10 w-10 bg-accent rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-black"/>
      </div>
    </footer>
  </Link>
);

export default BackToTop;
