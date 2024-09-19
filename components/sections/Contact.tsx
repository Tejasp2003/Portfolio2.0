"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { FloatingDock } from "../ui/floating-dock";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import toast from "react-hot-toast";

const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Tosha24",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/tosha24/",
  },
  {
    title: "Leetcode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://leetcode.com/Tosha24/",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://twitter.com/tosha_patel30",
  },
  {
    title: "Repixify",
    icon: (
      <Image
        src="/assets/icons/repixify.png"
        alt="Repixify"
        width={20}
        height={20}
      />
    ),
    href: "https://www.repixify.com/",
  },
];

const Contact = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendMessage = (e: any) => {
    if(!form.name || !form.email || !form.message) {
      toast.error("Please fill in all the fields.");
      return;
    }
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      {
        from_name: form.name,
        to_name: process.env.NEXT_PUBLIC_TO_NAME!,
        from_email: form.email,
        to_email: process.env.NEXT_PUBLIC_TO_EMAIL!,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
    )
    .then(() => {
       toast.success("Message sent successfully!");
    })
    .catch(() => {
      toast.error("Failed to send message. Please try again later.");
    })
    .finally(() => {
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
  }

  const handleChange = ({ target: { name, value } } : {
    target : {name: string; value: string; }
  }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section id="contact" onMouseOver={() => setActiveTab("Contact")}>
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Me <span className="bg-transparent text-black">📧</span>
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
            Hi there! I&apos;m always open to new projects and opportunities.
            Feel free to reach out to me. I&apos;ll try my best to get back to
            you as soon as possible.
          </p>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              className="rounded-lg border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500  w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700 p-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="rounded-lg border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500  w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700 p-2"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message for me"
              name="message"
              rows={5}
              className="rounded-lg border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500  w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700 p-2"
              value={form.message}
              onChange={handleChange}
            />
            <button
              className="rounded-lg border border-neutral-800 bg-teal-500 w-full z-10  placeholder:text-neutral-700 p-2 text-black font-bold text-xl"
              onClick={sendMessage}
            >
              {loading ? "Sending... " : "Send Message ↗️"}
            </button>
          </div>
        </div>

        <BackgroundBeams />
        <div>
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
