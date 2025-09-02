"use client";

import { motion } from "framer-motion";
import { Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Enchanted App",
    description:
      "The perfect app for plant lovers! Get watering & harvest reminders, seasonal planting guides, soil pH tips, and everything you need to grow your dream garden.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS Cloud Hosting",
      "Github Actions (CI/CD)",
    ],
    image: "/enchanted.jpg?height=200&width=400",
    stars: 128,
    forks: 64,
  },
  {
    title: "Discord Bot",
    description:
      "All-in-one discord bot for weather forecasts, AI chats, stream alerts from your favourite creator, role management, and server moderation.",
    tech: [
      "Python",
      "OpenWeather API",
      "OpenAI API",
      "Youtube API",
      "Twitch API",
    ],
    image: "/dcbot.jpg?height=200&width=400",
    stars: 369,
    forks: 12,
  },
  {
    title: "kelxd.lol → My Website!",
    description:
      "My GitHub-Style Portfolio: this is where I show off myself. (Yep, you're on it!)",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AWS Cloud Host"],
    image: "/website.jpeg?height=200&width=400",
    stars: 120,
    forks: 5,
  },
  {
    title: "Facebook Account Automation System",
    description:
      "Like, comment, message, and play games—just like a real person surfing on Facebook, but automated!",
    tech: ["Python", "Selenium", "Pyautogui", "Chromedriver"],
    image: "/fb.jpeg?height=200&width=400",
    stars: 66,
    forks: 36,
  },
  {
    title: "Claw Game",
    description:
      "Play the viral Suika Game (Watermelon Game)… but in 360° 3D! Grab fruits, stack them, and score big—just like a real claw machine. Download and play the game in Windows!",
    tech: ["Unity 3D", "C#", "Maya", "Adobe Ps"],
    image: "/clawgame.jpeg?height=400&width=400",
    stars: 99,
    forks: 81,
    links: "https://kelxdlol.itch.io/claw-game",
    showButton: true,
    buttonText: "Play Claw Game",
  },
  {
    title: "Quby Jump",
    description:
      "A fast-paced 3D platformer where timing is everything. Hold [SPACE] to jump between platforms—but one wrong move and Quby takes a tumble! Can you master the rhythm? Play now in browser!",
    tech: ["Unity 3D", "C#", "Adobe Ps"],
    image: "/quby.jpeg?height=200&width=400",
    stars: 37,
    forks: 21,
    links: "https://kelxdlol.itch.io/quby-jump",
    showButton: true,
    buttonText: "Play Quby Jump",
  },
  {
    title: "Best Years of Your Life",
    description:
      "A psychological horror game delving into the isolation and creeping dread of a trapped high school student. As they cling to normalcy, the world around them twists—subtle changes corrupt the environment, interactions, and reality itself. Watch the trailer → https://www.youtube.com/watch?v=aXvWv8X5czQ",
    tech: ["Unity 3D", "C#", "Github", "Adobe AE", "Maya", "Adobe Ai"],
    image: "/BYYL.jpeg?height=200&width=400",
    stars: 20,
    forks: 25,
    links: "https://www.youtube.com/watch?v=aXvWv8X5czQ",
    showButton: true,
    buttonText: "Watch Trailer",
  },
  {
    title: "Bookstore Web Design",
    description:
      "UI Design for an Online Bookstore: Women & Children First. This design was created with vanilla HTML. The playful, child-friendly theme matches the bookstore's focus on women and children.",
    tech: ["HTML", "CSS", "JavaScript", "Adobe XD", "Adobe Ai"],
    image: "/wcf.png?height=200&width=400",
    stars: 26,
    forks: 12,
    links: "https://kelxd.lol/bookstore",
    showButton: true,
    buttonText: "View Design",
  },
  {
    title: "Pastel Themed Kanban Board",
    description:
      "A cute & colourful Kanban board to organise tasks, set deadlines, and stop procrastination in its tracks! Create, drag, and modify tasks with ease! (Support login and cloud save in the future!)",
    tech: [
      "Vue.js",
      "Tailwind CSS",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Nuxt.js",
    ],
    image: "/kanban.jpg?height=200&width=400",
    stars: 99,
    forks: 88,
    links: "https://kelxd.lol/kelboard/",
    showButton: true,
    buttonText: "Try it out",
  },
  {
    title: "Weather Wizard IOS APP",
    description:
      "Weather Wizard 🌦️ - Your Instant Forecast Sidekick!\nType any city or country and instantly get:\n☀️ Current, high & low temps | 💧 Humidity | 🌬️ Wind speed\n☔ Most importantly: Will it rain today? ⏰ When?!",
    tech: ["React Native", "JavaScript", "Node.js", "Expo"],
    image: "/weatherwizard.png?height=200&width=400",
    stars: 77,
    forks: 88,
    showButton: false,
  },
  {
    title: "Macau Wealth Partaking Scheme Calendar Calculator",
    description:
      "Confused about how many days you stayed in Macau in 2025? Wondering if you qualify for the 2026 benefits? This handy calendar helps you easily log and count your stay—so you’ll know exactly whether you’ve earned that 10k MOP next year! 💰💰💰💰",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/macaucalendar.jpg?height=200&width=400",
    stars: 183,
    forks: 2025,
    links: "https://kelxd.lol/macaucalendar/",
    showButton: true,
    buttonText: "Calculate now!",
  },
];

export default function ProjectsTab() {
  // Define color schemes for different project types
  const getProjectStyle = (index: number) => {
    const styles = [
      {
        bg: "bg-gradient-to-br from-emerald-500/5 to-green-500/5",
        border: "border-emerald-500/20",
        headerBg: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
        titleColor: "text-emerald-300",
        hover: "hover:border-emerald-400/40",
      },
      {
        bg: "bg-gradient-to-br from-blue-500/5 to-indigo-500/5",
        border: "border-blue-500/20",
        headerBg: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10",
        titleColor: "text-blue-300",
        hover: "hover:border-blue-400/40",
      },
      {
        bg: "bg-gradient-to-br from-purple-500/5 to-violet-500/5",
        border: "border-purple-500/20",
        headerBg: "bg-gradient-to-r from-purple-500/10 to-violet-500/10",
        titleColor: "text-purple-300",
        hover: "hover:border-purple-400/40",
      },
      {
        bg: "bg-gradient-to-br from-orange-500/5 to-red-500/5",
        border: "border-orange-500/20",
        headerBg: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
        titleColor: "text-orange-300",
        hover: "hover:border-orange-400/40",
      },
      {
        bg: "bg-gradient-to-br from-cyan-500/5 to-teal-500/5",
        border: "border-cyan-500/20",
        headerBg: "bg-gradient-to-r from-cyan-500/10 to-teal-500/10",
        titleColor: "text-cyan-300",
        hover: "hover:border-cyan-400/40",
      },
      {
        bg: "bg-gradient-to-br from-pink-500/5 to-rose-500/5",
        border: "border-pink-500/20",
        headerBg: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
        titleColor: "text-pink-300",
        hover: "hover:border-pink-400/40",
      },
    ];
    return styles[index % styles.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const style = getProjectStyle(index);
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Card
                className={`${style.bg} ${style.border} ${style.hover} overflow-hidden h-full transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${style.headerBg} opacity-20`}
                  ></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs text-white">
                        {project.stars}
                      </span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-white">
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </div>
                <CardHeader
                  className={`${style.headerBg} border-b ${style.border}`}
                >
                  <CardTitle className={`text-xl ${style.titleColor}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#c9d1d9]/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-black/20 text-[#c9d1d9] border-white/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={`border-t ${style.border} p-4`}>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4 text-sm text-[#8b949e]">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    {project.showButton && (
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${style.border} hover:bg-white/10 ${style.titleColor} transition-all duration-200`}
                        onClick={() =>
                          window.open(project.links, "_blank")?.focus
                        }
                      >
                        {project.buttonText}
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
