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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Card className="bg-[#161b22] border-[#30363d] overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#0d1117]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-[#30363d] pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#30363d] hover:bg-[#30363d]"
                  onClick={() => window.open(project.links, "_blank")?.focus}
                  style={{
                    display: project.showButton ? undefined : "none",
                  }}
                >
                  {project.buttonText}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
