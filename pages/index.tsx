import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home(
  { pageInfo, experiences, skills, projects, socials } : Props
) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>David Vera&apos;s Next Portfolio</title>
        <meta name="description" content="Software Developer portfolio using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
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

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfoPromise = fetchPageInfo();
  const experiencesPromise = fetchExperiences();
  const projectsPromise = fetchProjects();
  const skillsPromise = fetchSkills();
  const socialsPromise = fetchSocials();

  const pageInfo: PageInfo = await pageInfoPromise;
  const experiences: Experience[] = await experiencesPromise;
  const projects: Project[] = await projectsPromise;
  const skills: Skill[] = await skillsPromise;
  const socials: Social[] = await socialsPromise;

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};