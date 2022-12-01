import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import BackToTop from '../components/BackToTop'
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
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-accent/80">
      <Head>
        <title>{`${pageInfo?.name}\'s Next Portfolio`}</title>
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
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <BackToTop />

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