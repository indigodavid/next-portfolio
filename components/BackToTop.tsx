import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {}

const BackToTop = (props: Props) => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center ml-5">
          <Image
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://ik.imagekit.io/ezcar/DavidVeraNov2022_KDbSgVGgn.jpg"
            alt="Up"
            width={40}
            height={40}
          />
        </div>
      </footer>
    </Link>
  )
}

export default BackToTop