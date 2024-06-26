export interface Dictionary {
  page: {
    experience: string
    hero: string
    client: {
      words: string
      partners: string
    }
    bentoGrid: {
      copied: string
      notCopied: string
    }
    floatingNav: {
      about: string
      testimonials: string
      contact: string
    }
    header: {
      title: string
      tagline: string
      introduction: string
      callToAction: string
    }
    gridItems: Array<{
      title: string
      description: string
    }>
    projects: Array<{
      /* Define your projects structure here */
    }>
    testimonials: Array<{
      quote: string
      name: string
      role: string
    }>
    experiences: Array<{
      title: string
      description: string
    }>
    approach: string
    approaches: Array<{
      title: string
      description: string
    }>
    footer: {
      presence: string
      discussion: string
      contact: string
    }
  }
}

export const defaultEnglishDictionary: Dictionary = {
  page: {
    experience: 'Experience',
    hero: 'Hero',
    client: {
      words: 'Words',
      partners: 'Partners',
    },
    bentoGrid: {
      copied: 'Copied',
      notCopied: 'Not Copied',
    },
    floatingNav: {
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    header: {
      title: 'Title',
      tagline: 'Tagline',
      introduction: 'Introduction',
      callToAction: 'Call to Action',
    },
    gridItems: [
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
    ],
    projects: [],
    testimonials: [],
    experiences: [
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
    ],
    approach: 'Approach',
    approaches: [
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
      { title: 'Title', description: 'Description' },
    ],
    footer: {
      presence: 'Presence',
      discussion: 'Discussion',
      contact: 'Contact',
    },
  },
}

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    url: 'https://github.com/felipewrsilva/',
  },
  {
    id: 2,
    img: '/link.svg',
    url: 'https://www.linkedin.com/in/felipewrsilva/',
  },
  {
    id: 3,
    img: '/twit.svg',
    url: 'https://twitter.com/felipewrsilva',
  },
]
