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
    description: "I'm Hijiki.\nCurrently attending graduate school, I spend my days writing code and running my blog.",
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
    description: "Born in 2002, from Tokyo.\nI started getting interested in IT during high school, and participating in a long-term internship inspired me to aim for a career as a software engineer! I plan to start working as a SWE in 2027.\nI have mostly used Python, but I also want to master Web frontend development with JavaScript (TypeScript).\n\nI have been running a blog for light novel reviews since my freshman year of university. My favorite series are Sword Art Online (the title font is from SAO) and Rascal Does Not Dream (the image is from the series' real-life setting)!\n\nThis portfolio site was created by Antigravity. I strive to be someone who can effectively utilize AI.",
    links: {
      x: 'Light novels, anime, and IT-related topics',
      blog: 'Light novel reviews and more',
      blogTech: 'IT, career, and blog operation',
      github: 'Projects created and things learned',
      kaggle: 'Participated in tabular data competitions a few times',
      note: 'Used to use this',
      blogMap: 'Registered on a service to find blogs'
    }
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
