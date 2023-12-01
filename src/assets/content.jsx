import IMAGES from "../images/images";

const content = {
  featuredProjects: [
    {
      id: 1,
      type: "Featured Project",
      name: "Portfolio-v3",
      desc: "My 3rd iteration of the portfolio making use of 'styled-component', 'framer-motion' for frontend and 'express.js' for backend.",
      image: `${IMAGES.work03}`,
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
      image: `${IMAGES.work01}`,
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
      image: `${IMAGES.work02}`,
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
    title: "Web Developer",
    about: 
      {
        paraOne: "Hello! My name is Dũng (pronounced as Dzung).",
        paraTwo: "I enjoy creating things. My interest in programming started back in 2020 when I had to create custom reports for Google Analytics. I started learning my first language, Python.",
        paraThree: "I began to commit to learning web development towards the end of 2022. Now, I am building stuff in React, Node, and a few cool frameworks.",
        paraFour: "These are a few technologies I’ve been working with recently:"
      },
    contactPara: "I’m currently looking for exciting new opportunities, my inbox is always open. Whether you have a question or just want to say hi, drop me a line!",
    heroPara: "A full stack web developer who loves solving problems. Take a peak at my projects. Let's chat if you have an exciting new role that would let me flex my coding muscles and continue learning everyday.",
  },
};

export default content;
