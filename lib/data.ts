import React from "react";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Designer",
    location: "Regem Enterprises",
    description:
      "Completed a UI/UX Designer internship, using Figma to design responsive, user-friendly interfaces and prototypes.",
    icon: React.createElement(FaFigma),
    date: "May 2023",
  },
  {
    title: "Front-End Developer",
    location: "Cyper Studio",
    description:
      "I worked as a front-end developer Intern for 2 months. I also upskilled to the full stack.",
    icon: React.createElement(FaReact),
    date: "May 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Jawaharlal Nehru University",
    description:
      "I was a full-stack developer working as Internship for 3 months. My stack includes React, Next.js, Tailwind and  MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "FadFasion",
    description:
      "I worked as a full-stack developer on Fad Fashion, a social media platform for users to share fashion trends and connect.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Blueship",
    description:
      "I worked as a full-stack developer on Blueship, a logistics aggregator platform connecting businesses with logistics providers.",
    tags: ["React", "Next.js", "Tailwind", "Redux", "Vanila CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SAAARP Lab",
    description:
      "I worked on the frontend development of the official website for SAAARP Lab, focusing on creating a responsive and user-friendly interface.​",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "C",
  "Python",
  "Framer Motion",
] as const;
