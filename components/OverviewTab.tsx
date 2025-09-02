"use client";

import { motion } from "framer-motion";
import { Star, Code, Briefcase, Coffee, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OverviewTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function OverviewTab({
  activeTab,
  setActiveTab,
}: OverviewTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-6">
        <Card className="bg-[#161b22] border-[#30363d]">
          <CardHeader>
            <CardTitle className="text-xl text-white">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hey there! 👋 I'm a Kel / Kelly, a <strong>full-stack dev</strong>{" "}
              with a creative twist. 💻✨
            </p>
            <p className="mt-4">
              🌐 <strong>Websites</strong> that spark joy, <br></br>📱{" "}
              <strong>Apps</strong> that feel like magic,<br></br> 🎮{" "}
              <strong>Games</strong> that pull you in,
              <br></br> 🎵 <strong>Music</strong> that makes you move, <br></br>
              ✨ <strong>Animations</strong> that tell stories—
            </p>
            <p className="mt-4">
              I love turning wild ideas into real, clickable, playable things.
              ✨<br></br>
              When I'm not coding? Probably lost in a game, jamming on my
              guitar, or daydreaming up the next big thing. 🚀
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Card className="bg-[#161b22] border-[#30363d] h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Navigations
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[
                  {
                    name: "Skills",
                    icon: Code,
                    description: "Check out my technical skills and expertise",
                    tab: "skills",
                  },
                  {
                    name: "Projects",
                    icon: Briefcase,
                    description: "Browse through my portfolio of projects",
                    tab: "projects",
                  },
                  {
                    name: "Fun Facts",
                    icon: Coffee,
                    description: "Discover interesting facts about me",
                    tab: "funfacts",
                  },
                  {
                    name: "Contact",
                    icon: Mail,
                    description: "Get in touch with me",
                    tab: "contact",
                  },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className={cn(
                      "border border-[#30363d] rounded-md p-4 cursor-pointer",
                      activeTab === link.tab && "border-[#58a6ff] bg-[#161b22]"
                    )}
                    onClick={() => setActiveTab(link.tab)}
                  >
                    <div className="flex items-center gap-2">
                      <link.icon className="h-5 w-5 text-[#58a6ff]" />
                      <h3 className="font-medium text-white">{link.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-[#8b949e]">
                      {link.description}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Card className="bg-[#161b22] border-[#30363d] h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Project Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border border-[#30363d] rounded-md">
                    <span>Coding Projects</span>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#f1e05a]" />
                      <span className="font-bold">40+</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-[#30363d] rounded-md">
                    <span>Games Developed</span>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#f1e05a]" />
                      <span className="font-bold">5+</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-[#30363d] rounded-md">
                    <span>Audio Mixing</span>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#f1e05a]" />
                      <span className="font-bold">30+</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-[#30363d] rounded-md">
                    <span>Video Production</span>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-[#f1e05a]" />
                      <span className="font-bold">30+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
