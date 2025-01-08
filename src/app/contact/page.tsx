'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { FormEvent, JSX, useRef } from 'react';

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  description: string;
}

const info: ContactInfo[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8669098598",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "himanshuk1205@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "A/104 Avishkar, Ambadi Road, Vasai(W)",
  },
];

const Page: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.SERVICE_ID || '',
          process.env.TEMPLATE_ID || '',
          form.current,
          process.env.PUBLIC_KEY
        )
        .then(
          () => {
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.error('Failed to send message:', error.text);
          }
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="p-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1 order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Feel free to reach out for any project inquiries, collaboration
                opportunities, or just to say hello. I&apos;m always open to
                discussing new ideas and turning them into impactful solutions.
                Let&apos;s connect and build something amazing together!
              </p>

              <div className="grid grid-cols-1 gap-6">
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type Your Message"
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
