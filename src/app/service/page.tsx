"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    Description: "We create responsive, scalable, and user-friendly websites tailored to your business needs, ensuring a seamless digital experience for your audience.",
    href: "/contact",
  },
  {
    num: "02",
    title: "App Development",
    Description: "We build robust mobile and desktop applications with modern technologies, offering intuitive interfaces and reliable performance.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Game Development",
    Description: "Our team crafts engaging and immersive gaming experiences, blending creativity and technology to bring your ideas to life.",
    href: "/contact",
  },
  {
    num: "04",
    title: "UI/UX Development",
    Description: "We design intuitive and visually appealing user interfaces that enhance user engagement and deliver an exceptional user experience.",
    href: "/contact",
  },
];

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"> {service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
