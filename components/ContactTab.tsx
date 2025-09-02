"use client";

import { motion } from "framer-motion";
import { Github, Mail, Briefcase, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContactTabProps {
  copyEmail: () => void;
  triggerShake: () => void;
}

// Define color schemes for different contact methods
const contactStyles = {
  email: {
    bg: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    titleColor: "text-blue-300",
    hover: "hover:bg-blue-500/15 hover:border-blue-400/50",
    buttonHover:
      "hover:bg-blue-500/20 border-blue-500/40 text-blue-300 hover:text-blue-200",
  },
  github: {
    bg: "bg-gradient-to-r from-gray-500/10 to-slate-500/10",
    border: "border-gray-500/30",
    iconBg: "bg-gray-500/20",
    iconColor: "text-gray-400",
    titleColor: "text-gray-300",
    hover: "hover:bg-gray-500/15 hover:border-gray-400/50",
    buttonHover:
      "hover:bg-gray-500/20 border-gray-500/40 text-gray-300 hover:text-gray-200",
  },
  linkedin: {
    bg: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    titleColor: "text-cyan-300",
    hover: "hover:bg-cyan-500/15 hover:border-cyan-400/50",
    buttonHover:
      "hover:bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:text-cyan-200",
  },
  instagram: {
    bg: "bg-gradient-to-r from-pink-500/10 to-purple-500/10",
    border: "border-pink-500/30",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
    titleColor: "text-pink-300",
    hover: "hover:bg-pink-500/15 hover:border-pink-400/50",
    buttonHover:
      "hover:bg-pink-500/20 border-pink-500/40 text-pink-300 hover:text-pink-200",
  },
};

const contactMethods = [
  {
    platform: "Email",
    handle: "kellyleong2002@gmail.com",
    action: "Copy",
    icon: Mail,
    style: contactStyles.email,
  },
  {
    platform: "GitHub",
    handle: "@kimikokel",
    action: "Follow",
    link: "https://github.com/kimikokel",
    icon: Github,
    style: contactStyles.github,
  },
  {
    platform: "LinkedIn",
    handle: "Kelly (Kuan Pui) Leong ",
    action: "Connect",
    link: "https://www.linkedin.com/in/kelly-leong-a79024327/",
    icon: Briefcase,
    style: contactStyles.linkedin,
  },
  {
    platform: "Instagram",
    handle: "@kelxd_",
    action: "Follow",
    link: "https://www.instagram.com/kelxd_/",
    icon: User,
    style: contactStyles.instagram,
  },
];

export default function ContactTab({
  copyEmail,
  triggerShake,
}: ContactTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#161b22] border-[#30363d] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-b border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <CardTitle className="text-xl text-emerald-300">
                Get In Touch
              </CardTitle>
              <CardDescription className="text-emerald-200/70">
                Contact me via form/email or any contact below for project
                details, commissions, and collaboration opportunities
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col p-6 border rounded-lg ${contact.style.bg} ${contact.style.border} ${contact.style.hover} transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full ${contact.style.iconBg} flex items-center justify-center`}
                    >
                      <contact.icon
                        className={`h-5 w-5 ${contact.style.iconColor}`}
                      />
                    </div>
                    <h3 className={`font-semibold ${contact.style.titleColor}`}>
                      {contact.platform}
                    </h3>
                  </div>
                  <p className="text-[#c9d1d9] mb-4 flex-1">{contact.handle}</p>
                  {contact.link ? (
                    <Link
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className={`w-full ${contact.style.buttonHover} transition-all duration-200`}
                      >
                        {contact.action}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full ${contact.style.buttonHover} transition-all duration-200`}
                      onClick={copyEmail}
                    >
                      {contact.action}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 border-violet-500/20">
              <CardHeader className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-b border-violet-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <CardTitle className="text-lg text-violet-300">
                    Send a Message
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ContactForm triggerShake={triggerShake} />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
