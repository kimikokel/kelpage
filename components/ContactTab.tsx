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

const contactMethods = [
  {
    platform: "Email",
    handle: "kellyleong2002@gmail.com",
    action: "Copy",
    icon: Mail,
  },
  {
    platform: "GitHub",
    handle: "@kimikokel",
    action: "Follow",
    link: "https://github.com/kimikokel",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    handle: "Kelly (Kuan Pui) Leong ",
    action: "Connect",
    link: "https://www.linkedin.com/in/kelly-leong-a79024327/",
    icon: Briefcase,
  },
  {
    platform: "Instagram",
    handle: "@kelxd_",
    action: "Follow",
    link: "https://www.instagram.com/kelxd_/",
    icon: User,
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
      <Card className="bg-[#161b22] border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Get In Touch</CardTitle>
          <CardDescription>
            Feel free to reach out for collaborations or just a friendly chat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col p-4 border border-[#30363d] rounded-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <contact.icon className="h-5 w-5 text-[#58a6ff]" />
                    <h3 className="font-medium">{contact.platform}</h3>
                  </div>
                  <p className="text-white mb-4">{contact.handle}</p>
                  {contact.link ? (
                    <Link
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-auto border-[#30363d] hover:bg-[#30363d]"
                        style={{ width: "100%" }}
                      >
                        {contact.action}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-auto border-[#30363d] hover:bg-[#30363d]"
                      onClick={copyEmail}
                    >
                      {contact.action}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>

            <Card className="bg-[#0d1117] border-[#30363d]">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm triggerShake={triggerShake} />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
