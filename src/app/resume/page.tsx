"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from "framer-motion";

const about = {
  title: "About me",
  description: "I am a passionate and driven software engineer with expertise in web and app development. I enjoy crafting seamless user experiences and building scalable, robust applications. My diverse skill set allows me to adapt to different projects and deliver top-quality results.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Himanshu Khairnar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8669098598",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Github",
      fieldValue: "Himanshu-Khairnar",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "himanshuk1205@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Marathi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Over the years, I have honed my skills by working on diverse projects and gaining real-world experience in software development. Here are some highlights of my professional journey:",
  items: [
    {
      company: "Prodigy Infotech",
      position: "Full Stack Developer Intern",
      duration: "2024 Dec - 2025 January",
      description: "Worked on building responsive web applications, integrating APIs, and optimizing code for performance. Collaborated with cross-functional teams to deliver high-quality solutions.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Education has been the foundation of my skills and knowledge, equipping me to tackle challenges and excel in my field.",
  items: [
    {
      institution: "St. Francis High School",
      degree: "SSC 10TH Exam",
      duration: "2022",
      description: "Completed secondary education with a strong focus on science and mathematics, laying the groundwork for my technical expertise.",
    },
    {
      institution: "Government Polytechnic Mumbai",
      degree: "Diploma in Computer Science",
      duration: "2022-2025",
      description: "Currently pursuing a diploma in Computer Science, acquiring in-depth knowledge in programming, algorithms, and software development.",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Here are some of the key technologies and tools I have mastered over the years, enabling me to deliver exceptional results:",
  skillList: [
    {
      icons: <FaHtml5 />,
      name: "HTML",
      description: "Proficient in writing semantic, accessible, and SEO-friendly HTML code.",
    },
    {
      icons: <FaCss3 />,
      name: "CSS",
      description: "Skilled in creating responsive designs and implementing modern layouts with CSS and preprocessors.",
    },
    {
      icons: <FaJs />,
      name: "JavaScript",
      description: "Experienced in writing efficient and clean JavaScript code for dynamic applications.",
    },
    {
      icons: <FaReact />,
      name: "ReactJs",
      description: "Expertise in building reusable components and managing state in React applications.",
    },
    {
      icons: <SiNextdotjs />,
      name: "NextJS",
      description: "Specialized in server-side rendering and building scalable web applications using Next.js.",
    },
    {
      icons: <SiTailwindcss />,
      name: "TailwindCss",
      description: "Capable of rapidly building visually stunning designs using TailwindCSS utility classes.",
    },
    {
      icons: <FaNodeJs />,
      name: "NodeJs",
      description: "Experienced in building backend services and RESTful APIs using Node.js.",
    },
    {
      icons: <FaFigma />,
      name: "Figma",
      description: "Proficient in designing wireframes and prototypes using Figma for an intuitive user experience.",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              className="w-[6px] h-[6px] rounded-full bg-accent"
                            >
                            </span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>)
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              className="w-[6px] h-[6px] rounded-full bg-accent"
                            >
                            </span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>)
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {
                  skills.skillList.map((skills, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skills.icons}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skills.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })
                }
              </ul>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-center">
              <div className="flex flex-col gap-[30px]">
                <h3
                  className="text-4xl font-bold"
                >
                  {about.title}
                </h3>
                <p
                  className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">
                          {item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>


        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
