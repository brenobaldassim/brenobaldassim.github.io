import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import MySkillsSection from '@/components/sections/MySkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ResumeSection from '@/components/sections/ResumeSection.vue'

export const sectionOptions = [
  {
    id: 'resume',
    title: 'Resume',
    component: ResumeSection
  },
  {
    id: 'about-me',
    title: 'About Me',
    component: AboutMeSection
  },
  {
    id: 'my-skills',
    title: 'My Skills',
    component: MySkillsSection
  },
  {
    id: 'projects',
    title: 'Projects',
    component: ProjectsSection
  },
  {
    id: 'contact',
    title: 'Contact',
    component: ContactSection
  }
]
