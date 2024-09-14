import { IconBrandGithub } from "@tabler/icons-react";

type Skill = {
  [key: string]: {
    name: string;
    icon: string;
  }[];
};

export const skillsSet: Skill = {
  Frontend: [
    { name: "React.Js", icon: "/assets/icons/react.svg" },
    { name: "Next.Js", icon: "/assets/icons/next.svg" },
    { name: "Javascript", icon: "/assets/icons/js.svg" },
    { name: "Typescript", icon: "/assets/icons/typescript.svg" },
    { name: "Redux", icon: "/assets/icons/redux.svg" },
    { name: "TailwindCSS", icon: "/assets/icons/tailwind.svg" },
    { name: "HTML", icon: "/assets/icons/html.svg" },
    { name: "CSS", icon: "/assets/icons/css.svg" },
    { name: "Framer", icon: "/assets/icons/framer.svg" },
  ],
  Backend: [
    { name: "Node.Js", icon: "/assets/icons/node.svg" },
    { name: "Express.Js", icon: "/assets/icons/express.svg" },
    { name: "GoLang", icon: "/assets/icons/golang.svg" },
  ],
  Databases: [
    { name: "MongoDB", icon: "/assets/icons/mongo.svg" },
    { name: "Firebase", icon: "/assets/icons/firebase.svg" },
  ],
  "Mobile Development": [
    { name: "React Native", icon: "/assets/icons/react.svg" },
    { name: "Expo", icon: "/assets/icons/expo.svg" },
    { name: "NativeWind", icon: "/assets/icons/nativewind.svg" },
  ],
  "Programming Languages": [
    { name: "C", icon: "/assets/icons/c.svg" },
    { name: "C++", icon: "/assets/icons/cpp.svg" },
    { name: "Python", icon: "/assets/icons/python.svg" },
    { name: "Java", icon: "/assets/icons/java.svg" },
  ],
  Tools: [
    { name: "Hostinger VPS", icon: "/assets/icons/hostinger.svg" },
    { name: "Cloudflare", icon: "/assets/icons/cloudflare.svg" },
    { name: "Vercel", icon: "/assets/icons/vercel.svg" },
    { name: "Postman", icon: "/assets/icons/postman.svg" },
    { name: "Figma", icon: "/assets/icons/figma.svg" },
    { name: "Cloudinary", icon: "/assets/icons/cloudinary.svg" },
    { name: "Git", icon: "/assets/icons/git.svg" },
    { name: "Netlify", icon: "/assets/icons/netlify.svg" },
    { name: "Docker", icon: "/assets/icons/docker.svg" },
    { name: "Stripe", icon: "/assets/icons/stripe.svg" },
  ],
};

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: { icon: string; name: string }[];
  tags: string[];
}

export const tags = [
  "All",
  "Frontend",
  "Full Stack",
  "API",
  "MERN",
  "SEO",
]

export const projectsData: Project[] = [
  {
    name: "Repixify.com",
    description:
      "Repixify is an all-in-one platform offering a variety of everyday tools, including social media utilities, puzzles, and more. Try out the latest features and enjoy a seamless user experience with Repixify.",
    image: "/assets/images/repixify.png",
    link: "https://www.repixify.com/",
    github: "#",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/hostinger.svg", name: "Hostinger" },
      { icon: "/assets/icons/adsense.svg", name: "Google Adsense" },
      { icon: "/assets/icons/gemini.svg", name: "Gemini API" },
      { icon: "/assets/icons/cloudflare.svg", name: "Cloudflare" },
    ],
    tags: ["frontend", "seo", "api"],
  },
  {
    name: "E-kart Ecommerce",
    description:
      "E-kart is a feature-rich e-commerce platform with seamless user authentication and a well-integrated cart system. Users can browse products, manage favorites, and complete purchases.",
    image: "/assets/images/ekart.png",
    link: "https://mern-e-commerce-pi.vercel.app/",
    github: "https://github.com/Tosha24/MERN_E-Commerce",
    technologies: [
      { icon: "/assets/icons/react.svg", name: "React.js" },
      { icon: "/assets/icons/js.svg", name: "Javascript" },
      { icon: "/assets/icons/mongo.svg", name: "MongoDB" },
      { icon: "/assets/icons/express.svg", name: "Express.js" },
      { icon: "/assets/icons/node.svg", name: "Node.js" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/cloudinary.svg", name: "Cloudinary" },
      { icon: "/assets/icons/stripe.svg", name: "Stripe" },
    ],
    tags: ["full stack", "mern"],
  },
  {
    name: "EZ Invoice",
    description:
      "EZ Invoice is a comprehensive invoice generation tool designed for small businesses. Users can easily create, edit, delete, and export invoices to Excel.",
    image: "/assets/images/ezinvoice.png",
    link: "#",
    github: "https://github.com/Tosha24/EZ-Invoice",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/mongo.svg", name: "MongoDB" },
    ],
    tags: ["full stack"],
  },
  {
    name: "Threads Clone",
    description:
      "Threads Clone replicates the functionality of Threads Social Media App, allowing users to share thoughts and ideas on a social media-like platform.",
    image: "/assets/images/threads.png",
    link: "https://threads-tosha24.vercel.app/",
    github: "https://github.com/Tosha24/threads",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/mongo.svg", name: "MongoDB" },
    ],
    tags: ["full stack"],
  },
  {
    name: "Evently",
    description:
      "Evently is an all-in-one event management platform for organizing and managing events, users, tickets, sell tickets, and process payments.",
    image: "/assets/images/evently.png",
    link: "https://evently-event-management.vercel.app/",
    github: "https://github.com/Tosha24/Event-Management",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/mongo.svg", name: "MongoDB" },
      { icon: "/assets/icons/stripe.svg", name: "Stripe" },
    ],
    tags: ["full stack"],
  },
  {
    name: "Weather App",
    description:
      "The Weather App provides real-time weather updates for any location along with a 5-day forecast using the OpenWeatherMap API.",
    image: "/assets/images/weatherapp.png",
    link: "https://weather-app-tosha.vercel.app/",
    github: "https://github.com/Tosha24/WeatherApp",
    technologies: [
      { icon: "/assets/icons/react.svg", name: "React.js" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/api.svg", name: "OpenWeatherMap API" },
    ],
    tags: ["api", "frontend"],
  },
  {
    name: "Image Generation Website",
    description:
      "This platform utilizes the Dall-E API to generate creative images based on user input. Users can create images with a “Surprise Me” feature for spontaneous inspiration.",
    image: "/assets/images/imagegenie.png",
    link: "https://github.com/Tosha24/ImageGenie/blob/main/README.md",
    github: "https://github.com/Tosha24/ImageGenie",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/api.svg", name: "Dall-E API" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
    ],
    tags: ["frontend", "api"],
  },
  {
    name: "Portfolio 1.0",
    description:
      "A minimalist portfolio website designed to showcase your work, skills and projects elegantly.",
    image: "/assets/images/portfolio1.png",
    link: "https://portfolio-tosha24.vercel.app/",
    github: "https://github.com/Tosha24/portfolio",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/framer.svg", name: "Framer" },
    ],
    tags: ["frontend"],
  },
  {
    name: "Portfolio 2.0",
    description:
      "This modern portfolio website integrates advanced animations and an enhanced UI/UX to showcase projects in a visually engaging manner.",
    image: "/assets/images/portfolio2.png",
    link: "http://tosha.dev/",
    github: "https://github.com/Tosha24/portfolio2.0",
    technologies: [
      { icon: "/assets/icons/next.svg", name: "Next.js" },
      { icon: "/assets/icons/typescript.svg", name: "Typescript" },
      { icon: "/assets/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/assets/icons/framer.svg", name: "Framer" },
    ],
    tags: ["frontend"],
  },
];
