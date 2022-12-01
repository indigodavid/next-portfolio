import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
}

const Projects = ({ projects }: Props) => (
  <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
    <h3 className="sectionHeader">
      Projects
    </h3>
    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-accent/80 scrollbar-thin">
      {projects?.map((project, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          key={project._id}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center mt-16 p-10 sm:mt-0 md:p-44 h-screen"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            className="max-h-32 md:max-h-60"
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            src={urlFor(project?.image).url()}
            alt={project?.title}
          />
          <div className="space-y-3 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="hidden sm:inline underline decoration-accent/50">
                Case Study
                {' '}
                {i + 1}
                {' '}
                of
                {' '}
                {projects?.length}
                :
              </span>
              {' '}
              {project?.title}
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              {project?.technologies.map((technology) => (
                <Image
                  className="h-10 w-10 object-contain rounded-lg bg-white opacity-80"
                  key={technology?._id}
                  src={urlFor(technology?.image).url()}
                  alt={technology?.title}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <div className="text-sm text-center md:text-left max-h-32 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent/80">
              {project?.summary}
            </div>
            <div className="flex justify-end gap-4">
              <SocialIcon
                url={project?.repositoryLink}
                bgColor="white"
                fgColor="gray"
              />
              {project?.liveLink
                  && (
                  <SocialIcon
                    url={project?.liveLink}
                    bgColor="white"
                    fgColor="gray"
                  />
                  )}
            </div>
          </div>
        </motion.div>
      ))}

    </div>
    <div className="w-full absolute top-[30%] bg-accent/10 left-0 h-[31em] -skew-y-12" />
  </div>
);

export default Projects;
