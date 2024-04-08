"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const skillsList = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Javascript",
  "HTML",
  "CSS",
  "Github",
  "MySQL",
  "Jest",
  "React Testing Library",
];

const certificateList = [
  {
    url: "https://cutshort.io/certificate/90327",
    name: "Javascript-Advanced",
  },
  {
    url: "https://cutshort.io/certificate/90351",
    name: "React-Certified",
  },
  {
    url: "https://cutshort.io/certificate/90053",
    name: "HTML/CSS Certified",
  },
  {
    url: "https://cutshort.io/certificate/90046",
    name: "React Native Certified",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        {skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <li>KV IMA (Science)</li>
        <li>RV College of Engineering, BTech</li>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <>
        {certificateList.map((certificate) => (
          <Link key={certificate.url} href={certificate.url} target="_blank">
            <li className="hover:scale-y-110 hover:text-secondary-300">
              {certificate.name}
            </li>
          </Link>
        ))}
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about_image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Next.js,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2 grid grid-cols-3 gap-x-1 gap-y-2">
                {TAB_DATA.find((t) => t.id === tab).content}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
