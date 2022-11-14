import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>+593986999845</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>david.verac@hotmail.com</p>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>N7D SN LT 123, Pintag, Quito, Ecuador</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" name="name" id="name" />
            <input placeholder="Email" className="contactInput" type="email" name="email" id="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" name="subject" id="subject" />

          <textarea placeholder="Message" className="contactInput" name="message" id="message" />
          <button
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe