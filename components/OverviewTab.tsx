"use client";

import { motion } from "framer-motion";
import { Star, Code, Briefcase, Coffee, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OverviewTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// Color schemes for navigation cards
const navStyles = {
  skills: {
    bg: "bg-gradient-to-br from-blue-950/50 to-blue-900/20 border-blue-800/50",
    hover: "hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20",
    icon: "text-blue-400",
    title: "text-blue-200",
  },
  projects: {
    bg: "bg-gradient-to-br from-purple-950/50 to-purple-900/20 border-purple-800/50",
    hover: "hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20",
    icon: "text-purple-400",
    title: "text-purple-200",
  },
  funfacts: {
    bg: "bg-gradient-to-br from-green-950/50 to-green-900/20 border-green-800/50",
    hover: "hover:border-green-600 hover:shadow-lg hover:shadow-green-900/20",
    icon: "text-green-400",
    title: "text-green-200",
  },
  contact: {
    bg: "bg-gradient-to-br from-orange-950/50 to-orange-900/20 border-orange-800/50",
    hover: "hover:border-orange-600 hover:shadow-lg hover:shadow-orange-900/20",
    icon: "text-orange-400",
    title: "text-orange-200",
  },
};

// Color schemes for stats
const statsStyles = [
  {
    bg: "bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-blue-700/50",
    accent: "text-blue-300",
    star: "text-blue-400",
  },
  {
    bg: "bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-purple-700/50",
    accent: "text-purple-300",
    star: "text-purple-400",
  },
  {
    bg: "bg-gradient-to-r from-green-900/30 to-green-800/20 border-green-700/50",
    accent: "text-green-300",
    star: "text-green-400",
  },
  {
    bg: "bg-gradient-to-r from-orange-900/30 to-orange-800/20 border-orange-700/50",
    accent: "text-orange-300",
    star: "text-orange-400",
  },
];

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
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-indigo-950/50 to-violet-900/20 border-indigo-800/50 hover:border-indigo-600 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-900/50 to-violet-900/30 border-b border-indigo-700/50">
              <CardTitle className="text-xl text-indigo-200 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">K</span>
                </div>
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-[#c9d1d9] leading-relaxed">
                Hey there! 👋 I'm Kel / Kelly, a{" "}
                <span className="text-indigo-300 font-semibold">
                  full-stack developer
                </span>{" "}
                specialising in end-to-end digital solutions. 💻✨
              </p>
              <p className="mt-4 text-[#c9d1d9] leading-relaxed">
                🌐 <span className="text-blue-300 font-medium">Websites</span> &
                web applications, <br />
                📱{" "}
                <span className="text-purple-300 font-medium">
                  Mobile apps
                </span>{" "}
                for iOS & Android,
                <br /> �{" "}
                <span className="text-green-300 font-medium">
                  Business systems
                </span>{" "}
                & enterprise solutions,
                <br /> 🛒{" "}
                <span className="text-orange-300 font-medium">
                  E-commerce
                </span>{" "}
                & webstore platforms, <br />
                🎮 <span className="text-pink-300 font-medium">Games</span> &
                interactive experiences, <br />
                🎵{" "}
                <span className="text-violet-300 font-medium">
                  Music production
                </span>{" "}
                & audio mixing services, <br />
                🎬{" "}
                <span className="text-teal-300 font-medium">
                  Video editing
                </span>{" "}
                & animation video commissions—
              </p>
              <p className="mt-4 text-[#c9d1d9] leading-relaxed">
                I offer{" "}
                <span className="text-yellow-300 font-medium">
                  custom development
                </span>
                ,
                <span className="text-cyan-300 font-medium">
                  {" "}
                  commission work
                </span>
                , and
                <span className="text-rose-300 font-medium">
                  {" "}
                  freelance projects
                </span>{" "}
                to bring your ideas to life. ✨<br />
                From concept to deployment, I handle the full development
                lifecycle for businesses of all sizes. 🚀
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="transition-all duration-300"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 border-gray-700/50 h-full hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border-b border-gray-600/50">
                <CardTitle className="text-xl text-gray-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  Navigations
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
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
                ].map((link, index) => {
                  const style = navStyles[link.tab as keyof typeof navStyles];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer transition-all duration-300",
                        style.bg,
                        style.hover,
                        activeTab === link.tab && `${style.bg} shadow-lg`
                      )}
                      onClick={() => setActiveTab(link.tab)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                            link.tab === "skills"
                              ? "from-blue-500 to-blue-600"
                              : link.tab === "projects"
                              ? "from-purple-500 to-purple-600"
                              : link.tab === "funfacts"
                              ? "from-green-500 to-green-600"
                              : "from-orange-500 to-orange-600"
                          } flex items-center justify-center`}
                        >
                          <link.icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className={`font-semibold ${style.title}`}>
                          {link.name}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-[#8b949e] leading-relaxed">
                        {link.description}
                      </p>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="transition-all duration-300"
          >
            <Card className="bg-gradient-to-br from-yellow-950/50 to-amber-900/20 border-yellow-800/50 h-full hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-yellow-900/50 to-amber-900/30 border-b border-yellow-700/50">
                <CardTitle className="text-xl text-yellow-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  Project Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { label: "Coding Projects", count: "40+" },
                    { label: "Games Developed", count: "5+" },
                    { label: "Audio Mixing", count: "30+" },
                    { label: "Video Production", count: "30+" },
                  ].map((stat, index) => {
                    const style = statsStyles[index];
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className={`flex justify-between items-center p-4 border rounded-lg transition-all duration-300 ${style.bg}`}
                      >
                        <span className="text-[#c9d1d9] font-medium">
                          {stat.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <Star className={`h-5 w-5 ${style.star}`} />
                          <span className={`font-bold text-lg ${style.accent}`}>
                            {stat.count}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
