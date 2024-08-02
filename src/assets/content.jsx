import IMAGES from "../images/images";

const content = {
  featuredProjects: [
    {
      id: 1,
      type: "Featured Project",
      name: "Portfolio-v3",
      desc: "My 3rd iteration of the portfolio making use of 'styled-component', 'framer-motion' for frontend and 'express.js' for backend.",
      imageSmall: `${IMAGES.work01.small}`,
      imageMedium: `${IMAGES.work01.medium}`,
      imageLarge: `${IMAGES.work01.large}`,
      techIcons: [
        { text: "React" },
        { text: "Framer Motion" },
        { text: "Styled Components" },
        { text: "Express" },
        { text: "Node" },
      ],
      externalLinks: [
        { link: "https://github.com",
            text: "Source code"
      },
        { value: "https://youtube.com",
        text: "Demo"
      },
      ],
    },
    {
      id: 2,
      type: "Featured Project",
      name: "Note App",
      desc: "A simple note-taking app written in React + Vite. It allows users to create, edit, and delete notes.",
      imageSmall: `${IMAGES.work02.small}`,
      imageMedium: `${IMAGES.work02.medium}`,
      imageLarge: `${IMAGES.work02.large}`,
      techIcons: [
        { text: "React" },
        { text: "Firebase" },
        { text: "CSS" },
      ],
      externalLinks: [
        { link: "https://github.com/Benkaz3/note-app",
          text: "Source code"
      },
        { link: "https://benkaz3-note-app.netlify.app/",
        text: "Demo"
      },
      ],
    },
    {
      id: 3,
      type: "Featured Project",
      name: "Tenzies Game App",
      desc: "This is a React application for playing the Tenzies game. The game involves rolling dice and trying to achieve 'tenzies' where all dice have the same value and are held.",
      imageSmall: `${IMAGES.work03.small}`,
      imageMedium: `${IMAGES.work03.medium}`,
      imageLarge: `${IMAGES.work03.large}`,
      techIcons: [
        { text: "React" },
        { text: "CSS" },
      ],
      externalLinks: [
        { link: "https://github.com/Benkaz3/tenzies-game",
          text: "Source code"
      },
        { link: "https://benkaz3-tenzies-game.netlify.app/",
        text: "Demo"
      },
      ],
    },
  ],
  author: {
    name: "Dzung Tran",
    title: "Marketer | Web Developer",
    about: 
      {
        paraOne: "Hello! My name is Dũng (pronounced as Dzung).",
        paraTwo: "I enjoy creating things. My interest in programming started back in 2020 when I had to create custom reports for Google Analytics. I started learning my first language, Python.",
        paraThree: "I began to commit to learning web development towards the end of 2022. Now, I am building stuff in React, Node, and a few cool frameworks.",
        paraFour: "These are a few technologies I’ve been working with recently:"
      },
    contactPara: "I'm excited about building webs and automation tools, my inbox is always open. Whether you have a question or just want to say hi, drop me a line!",
    heroPara: "A full stack web developer who loves solving problems. There are more than just the the projects listed here, let's chat if you want to learn more and build something amazing together.",
  },
};

export default content;
