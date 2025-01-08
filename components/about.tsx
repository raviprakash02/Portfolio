"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p>
        Pursuing my B.Tech in Computer Science with a specialization in AI and
        ML, I realized my true passion lies in full-stack web development. I
        have experience working with technologies like React, Next.js, Node.js,
        and MongoDB, which have become the core of my development stack. I enjoy
        the challenge of problem-solving and the satisfaction of turning ideas
        into functional, user-friendly applications.
      </p>
      <p>
        I’ve worked on projects like a Tesla clone website and a social media
        platform called Fad Fashion, and I interned for 3 months at JNU as a
        full-stack developer on the Liveloud project, where I focused on both
        frontend and backend development, refining my skills in building
        seamless, responsive user experiences.
      </p>
      <p>
        I’m always eager to learn new technologies and take on new challenges.
        Right now, I’m seeking a full-time position as a software developer to
        continue growing and contributing to innovative projects.
      </p>
      <p>
        When I’m not coding, I enjoy playing chess, watching movies, and
        listening to music. I’m also passionate about learning, currently
        exploring new areas like history and artificial intelligence.
      </p>
      <p>This keeps it personal and reflects my journey and passion!</p>
    </motion.section>
  );
}
