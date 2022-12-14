import React from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { PageInfo } from '../typings';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {
  pageInfo: PageInfo;
}

const ContactMe = ({ pageInfo }: Props) => (
  <div className="h-screen relative flex flex-col pt-28 sm:pt-0 text-left md:flex-row w-full max-w-7xl md:px-10 justify-evenly mx-auto items-center">
    <h3 className="sectionHeader">Contact</h3>
    <div className="flex flex-col md:space-y-5 w-full items-center">
      <h4 className="text-lg sm:text-2xl font-semibold text-center">
        I am always interested in new projects.
        {' '}
        <span className="underline decoration-accent/50">Let&apos;s Talk.</span>
      </h4>
      <div>
        <Link href={`sms:${pageInfo?.phoneNumber}`}>
          <div className="flex items-center space-x-5 ml-2">
            <PhoneIcon className="text-accent h-7 w-7 animate-pulse" />
            <p>{pageInfo?.phoneNumber}</p>
          </div>
        </Link>
      </div>

      <div>
        <Link href={`mailto:${pageInfo?.email}`}>
          <div className="flex items-center space-x-5 ml-2">
            <EnvelopeIcon className="text-accent h-7 w-7 animate-pulse" />
            <p>{pageInfo?.email}</p>
          </div>
        </Link>
      </div>

      <div>
        <div className="flex items-center space-x-5 ml-2">
          <MapPinIcon className="text-accent h-7 w-7 animate-pulse" />
          <p>{pageInfo?.address}</p>
        </div>
      </div>

      <form action={pageInfo?.formHandler} method="POST" className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            placeholder="Name"
            className="contactInput"
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className="hidden">Name</label>
          <input
            placeholder="Email"
            className="contactInput"
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email" className="hidden">Email</label>
        </div>

        <input
          placeholder="Subject"
          className="contactInput"
          type="text"
          name="subject"
          id="subject"
        />
        <label htmlFor="subject" className="hidden">Subject</label>

        <textarea
          placeholder="Message"
          className="contactInput"
          name="message"
          id="message"
          required
        />
        <label htmlFor="message" className="hidden">Message</label>
        <button
          className="bg-accent py-4 px-10 rounded-md text-black font-bold text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default ContactMe;
