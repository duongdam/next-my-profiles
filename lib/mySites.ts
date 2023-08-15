type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const MySites: Item[] = [
  {
    name: 'My Profile',
    items: [
      {
        name: 'About Me',
        slug: 'about-me',
        description: 'View my personal information, including name and contact information',
      },
      {
        name: 'Experience',
        slug: 'experience',
        description: 'View my experience information, including education and work history',
      },
      {
        name: 'Skills',
        slug: 'skills',
        description: 'View my skills information, including languages and technologies',
      },
      {
        name: 'More',
        slug: 'more',
        description: 'View more information about me, including interests and hobbies',
      },
    ],
  },
  {
    name: 'Highlights',
    items: [
      {
        name: 'React',
        slug: 'react',
        description: 'A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.',
      },
      {
        name: 'Next.js',
        slug: 'next-js',
        description: 'The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      },
      {
        name: 'Google Cloud Platform',
        slug: 'google-cloud-platform',
        description: 'Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure as Google.',
      },
      {
        name: 'Golang',
        slug: 'golang',
        description: 'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
      },
      {
        name: 'Node.js',
        slug: 'node-js',
        description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      },
      {
        name: 'Flutter',
        slug: 'flutter',
        description: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
      },
      {
        name: 'Python',
        slug: 'python',
        description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
      },
      {
        name: 'TypeScript',
        slug: 'typescript',
        description: 'TypeScript extends JavaScript by adding types.',
      },
    ],
  },
  {
    name: 'Experience',
    items: [
      {
        name: 'ClassFunc Software.,JSC',
        slug: 'classfunc-software-jsc',
        description: 'ClassFunc Software.,JSC is a software company that provides software development services, including web development, mobile development, and desktop development.',
      },
    ],
  },
];
