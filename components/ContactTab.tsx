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
import { useTranslation } from "../hooks/useTranslation";

interface ContactTabProps {
  copyEmail: () => void;
  triggerShake: () => void;
}

// Define color schemes for different contact methods
const contactStyles = {
  email: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    titleColor: "text-white",
    hover: "hover:border-white/25",
    buttonHover: "border-white/25 text-white hover:bg-white/10",
  },
  github: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    titleColor: "text-white",
    hover: "hover:border-white/25",
    buttonHover: "border-white/25 text-white hover:bg-white/10",
  },
  linkedin: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    titleColor: "text-white",
    hover: "hover:border-white/25",
    buttonHover: "border-white/25 text-white hover:bg-white/10",
  },
  instagram: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    titleColor: "text-white",
    hover: "hover:border-white/25",
    buttonHover: "border-white/25 text-white hover:bg-white/10",
  },
};

export default function ContactTab({
  copyEmail,
  triggerShake,
}: ContactTabProps) {
  const { t, isInitialized } = useTranslation();

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="xai-card overflow-hidden">
        <CardHeader className="border-b border-[#212327]">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/20 p-2">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="xai-eyebrow">Connect</p>
              <CardTitle className="text-xl text-white">
                {t("contact.title")}
              </CardTitle>
              <CardDescription className="text-[#7d8187]">
                {t("contact.description")}
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
                  whileHover={{ y: -2 }}
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
                  <p className="mb-4 flex-1 text-[#dadbdf]">{contact.handle}</p>
                  {contact.link ? (
                    <Link
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className={`w-full transition-all duration-200 ${contact.style.buttonHover}`}
                      >
                        {contact.action}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full transition-all duration-200 ${contact.style.buttonHover}`}
                      onClick={copyEmail}
                    >
                      {contact.action}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>

            <Card className="xai-card-soft">
              <CardHeader className="border-b border-[#212327]">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/20 p-2">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="xai-eyebrow">Message</p>
                    <CardTitle className="text-lg text-white">
                    Send a Message
                    </CardTitle>
                  </div>
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
