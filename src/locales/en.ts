export const en = {
  nav: {
    about: 'Career',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: '',
    name: 'Portfolio of Hijiki',
    role: '',
    description: 'Creating with Code, Connecting with Words',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
  },
  career: {
    title: 'Career',
    items: [
      {
        date: 'April 2021',
        title: 'Enrolled in Natural Sciences I, The University of Tokyo',
        description: ''
      },
      {
        date: 'August 2021',
        title: 'Launched Hijiki Blog',
        description: '',
        url: 'https://www.hijiki-blog.org/'
      },
      {
        date: 'October 2022',
        title: 'Advanced to the Faculty of Engineering',
        description: ''
      },
      {
        date: 'September 2023 - August 2025',
        title: 'Engineer Intern at an IT Venture',
        description: ''
      },
      {
        date: 'April 2025',
        title: 'Enrolled in Graduate School of Engineering, The University of Tokyo',
        description: ''
      },
      {
        date: 'April 2027',
        title: 'Scheduled to join a Web company as a SWE',
        description: ''
      }
    ]
  },
  profile: {
    title: 'Profile',
    description: "Hi! I'm Hijiki. Born in 2002, from Tokyo.\nI became interested in IT during high school and started aiming to become a software engineer after participating in a long-term internship! I plan to start working as a SWE in 2027.\nMy most used language is Python, but I also want to be able to do Web frontend with JavaScript (TypeScript).\n\nI've been running a blog writing light novel reviews since my first year of university. My favorite series are Sword Art Online and Rascal Does Not Dream series (the image is Enoshima seen from Shichirigahama, Kanagawa, the holy land of the series)!\n\nThis portfolio site was created by Antigravity. I think every day that I want to be on the side of using AI well.",
  },
  projects: {
    title: 'Projects',
    viewDemo: 'View Demo',
    viewCode: 'View Code',
    items: [
      {
        title: 'Hijiki Blog',
        description: 'A blog mainly posting reviews of light novels. Series covered include SAO, Classroom of the Elite, and Tanmoshi. Started in August 2021, with about 20,000 PV/month.',
        tags: ['WordPress', 'HTML/CSS', 'SEO'],
        url: 'https://www.hijiki-blog.org/'
      },
      {
        title: 'Light Novel Release Date Scraper',
        description: 'A system that scrapes new light novel release information and saves it to a Notion database. It fetches from multiple labels and centralizes management of release dates and followed series. Supports scheduled cloud execution.',
        tags: ['Python', 'Notion API', 'Azure/Google Cloud'],
        url: 'https://github.com/hijiki-my-dev/WebScraping'
      }
    ]
  },
  skills: {
    title: 'Skills & Tools',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      cloud: 'Cloud & Infrastructure',
      tools: 'Tools & OS',
    },
    items: {
      languages: [
        { name: 'Python', level: 'high' },
        { name: 'HTML/CSS', level: 'high' },
        { name: 'SQL', level: 'high' },
        { name: 'C', level: 'medium' },
        { name: 'JavaScript', level: 'medium' },
        { name: 'TypeScript', level: 'medium' },
        { name: 'R', level: 'medium' },
        { name: 'MATLAB', level: 'medium' },
        { name: 'Arduino', level: 'medium' },
      ],
      frameworks: [
        { name: 'Unity (C#)', level: 'high' },
        { name: 'WordPress', level: 'high' },
      ],
      cloud: [
        { name: 'AWS', level: 'high' },
        { name: 'Docker', level: 'high' },
        { name: 'Azure', level: 'medium' },
        { name: 'Google Cloud', level: 'medium' },
      ],
      tools: [
        { name: 'Git', level: 'high' },
        { name: 'Mac', level: 'high' },
        { name: 'Linux', level: 'high' },
        { name: 'VSCode', level: 'high' },
      ]
    }
  },
  contact: {
    title: "Let's Connect",
    description: "I'm currently open to new opportunities and collaborations. Feel free to reach out if you want to chat about code, design, or just say hi!",
    footer: '© {year} Hijiki. All rights reserved.',
  }
};
