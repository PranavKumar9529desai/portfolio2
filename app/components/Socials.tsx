import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { cn } from '../utils/utils';


const socials = [
  {
    href: "https://github.com/PranavKumar9529desai",
    icon: FiGithub,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/pranavkumar-desai-b27b8a252/",
    icon: FiLinkedin,
    title: "LinkedIn",
  },
  {
    href: "https://x.com/pranavdesa1549",
    icon: FiTwitter,
    title: "Twitter",
  },
  {
    href: "mailto:dpranv7745@gmail.com",
    icon: FiMail,
    title: "Email",
  },
];

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-6 py-4 px-4 justify-center items-center border w-fit rounded-full", className)}>
      {socials.map((social) => (

        <a
          key={social.title}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
