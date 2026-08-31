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
import { useTranslation } from "../hooks/useTranslation";

interface Project {
  titleKey?: string;
  descriptionKey?: string;
  title?: string; // Legacy support
  description?: string; // Legacy support
  tech: string[];
  image: string;
  stars: number;
  forks: number;
  links?: string;
  showButton?: boolean;
  buttonTextKey?: string;
}

const projects: Project[] = [
  {
    titleKey: "projects.projectDesc.kelxd",
    descriptionKey: "projects.projectDesc.kelxdDesc",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AWS Cloud Host"],
    image: "/website.jpeg?height=200&width=400",
    stars: 120,
    forks: 5,
  },
  {
    titleKey: "projects.projectDesc.mflow",
    descriptionKey: "projects.projectDesc.mflowDesc",
    tech: ["iOS", "Swift 6", "SwiftUI", "SwiftData", "Firebase"],
    image: "/mflow.jpg?height=200&width=400",
    stars: 13,
    forks: 14,
    showButton: false,
  },
  {
    titleKey: "projects.projectDesc.giveupBot",
    descriptionKey: "projects.projectDesc.giveupBotDesc",
    tech: [
      "Telegram Mini App",
      "Telegram Bot",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "Telegraf",
      "Prisma",
      "SQLite",
    ],
    image: "/giveupbot.png?height=200&width=400",
    stars: 223,
    forks: 332,
    showButton: false,
  },
  {
    titleKey: "projects.projectDesc.stocksTracker",
    descriptionKey: "projects.projectDesc.stocksTrackerDesc",
    tech: ["Node.js", "JavaScript", "HTML", "OpenAPI"],
    image: "/stocks.jpg?height=200&width=400",
    stars: 67,
    forks: 76,
    showButton: false,
  },
  {
    titleKey: "projects.projectDesc.enchanted",
    descriptionKey: "projects.projectDesc.enchantedDesc",
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
    titleKey: "projects.projectDesc.dcBot",
    descriptionKey: "projects.projectDesc.dcBotDesc",
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
    titleKey: "projects.projectDesc.fbSystem",
    descriptionKey: "projects.projectDesc.fbSystemDesc",
    tech: ["Python", "Selenium", "Pyautogui", "Chromedriver"],
    image: "/fb.jpeg?height=200&width=400",
    stars: 66,
    forks: 36,
  },
  {
    titleKey: "projects.projectDesc.clawGame",
    descriptionKey: "projects.projectDesc.clawGameDesc",
    tech: ["Unity 3D", "C#", "Maya", "Adobe Ps"],
    image: "/clawgame.jpeg?height=400&width=400",
    stars: 99,
    forks: 81,
    links: "https://kelxdlol.itch.io/claw-game",
    showButton: true,
    buttonTextKey: "projects.playClawGame",
  },
  {
    titleKey: "projects.projectDesc.qubyJump",
    descriptionKey: "projects.projectDesc.qubyJumpDesc",
    tech: ["Unity 3D", "C#", "Adobe Ps"],
    image: "/quby.jpeg?height=200&width=400",
    stars: 37,
    forks: 21,
    links: "https://kelxdlol.itch.io/quby-jump",
    showButton: true,
    buttonTextKey: "projects.playQubyJump",
  },
  {
    titleKey: "projects.projectDesc.byyl",
    descriptionKey: "projects.projectDesc.byylDesc",
    tech: ["Unity 3D", "C#", "Github", "Adobe AE", "Maya", "Adobe Ai"],
    image: "/BYYL.jpeg?height=200&width=400",
    stars: 20,
    forks: 25,
    links: "https://www.youtube.com/watch?v=aXvWv8X5czQ",
    showButton: true,
    buttonTextKey: "projects.watchTrailer",
  },
  {
    titleKey: "projects.projectDesc.bookstore",
    descriptionKey: "projects.projectDesc.bookstoreDesc",
    tech: ["HTML", "CSS", "JavaScript", "Adobe XD", "Adobe Ai"],
    image: "/wcf.png?height=200&width=400",
    stars: 26,
    forks: 12,
    links: "https://kelxd.lol/bookstore",
    showButton: true,
    buttonTextKey: "projects.viewDesign",
  },
  {
    titleKey: "projects.projectDesc.macauCalendar",
    descriptionKey: "projects.projectDesc.macauCalendarDesc",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/macaucalendar.jpg?height=200&width=400",
    stars: 183,
    forks: 2025,
    links: "https://kelxd.lol/macaucalendar/",
    showButton: true,
    buttonTextKey: "projects.calculateNow",
  },
  {
    titleKey: "projects.projectDesc.kanban",
    descriptionKey: "projects.projectDesc.kanbanDesc",
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
    links: "https://kelboard.kelxd.lol/",
    showButton: true,
    buttonTextKey: "projects.tryItOut",
  },
  {
    titleKey: "projects.projectDesc.weatherWizard",
    descriptionKey: "projects.projectDesc.weatherWizardDesc",
    tech: ["React Native", "JavaScript", "Node.js", "Expo"],
    image: "/weatherwizard.png?height=200&width=400",
    stars: 77,
    forks: 88,
    showButton: false,
  },
  {
    titleKey: "projects.projectDesc.streamerSongList",
    descriptionKey: "projects.projectDesc.streamerSongListDesc",
    tech: ["Spotify API", "Python", "JavaScript", "HTML", "CSS"],
    image: "/songlist.png?height=200&width=400",
    stars: 97,
    forks: 57,
    links: "https://kimikovt.link",
    showButton: true,
    buttonTextKey: "projects.tryItOut",
  },
];

export default function ProjectsTab() {
  const { t, isInitialized } = useTranslation();

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  // Define color schemes for different project types
  const getProjectStyle = (index: number) => {
    const styles = [
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#ff7a17]/25 to-transparent",
      },
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#7c3aed]/30 to-transparent",
      },
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#a0c3ec]/20 to-transparent",
      },
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#ffc285]/20 to-transparent",
      },
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#c4b5fd]/20 to-transparent",
      },
      {
        bg: "bg-[#191919]",
        border: "border-[#212327]",
        headerBg: "bg-[#1a1c20]",
        titleColor: "text-white",
        hover: "hover:border-white/20",
        tint: "from-[#ff7a17]/20 to-transparent",
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
                className={`${style.bg} ${style.border} ${style.hover} h-full overflow-hidden transition-colors duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={
                      project.titleKey
                        ? t(project.titleKey)
                        : project.title || "Project"
                    }
                    className="relative z-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 z-10 ${style.headerBg} opacity-35`}
                  ></div>
                  <div
                    className={`absolute inset-0 z-10 bg-gradient-to-br ${style.tint} opacity-60`}
                  ></div>
                  <div className="absolute top-2 right-2 z-20 flex gap-2">
                    <div className="flex items-center gap-1 rounded-full border border-white/25 bg-[#0a0a0a]/80 px-2 py-1 backdrop-blur-sm">
                      <Star className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-white/25 bg-[#0a0a0a]/80 px-2 py-1 backdrop-blur-sm">
                      <GitFork className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </div>
                <CardHeader
                  className={`${style.headerBg} border-b ${style.border}`}
                >
                  <p className="xai-eyebrow text-[#7d8187]">Project</p>
                  <CardTitle className={`text-xl ${style.titleColor}`}>
                    {project.titleKey ? t(project.titleKey) : project.title}
                  </CardTitle>
                  <CardDescription className="text-[#7d8187]">
                    {project.descriptionKey
                      ? t(project.descriptionKey)
                      : project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border-[#212327] bg-transparent text-[#dadbdf]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={`border-t ${style.border} p-4`}>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4 text-sm text-[#7d8187]">
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
                        className="border-white/25 text-white hover:bg-white/10"
                        onClick={() => {
                          const nextTab = window.open(project.links, "_blank");
                          nextTab?.focus();
                        }}
                      >
                        {project.buttonTextKey
                          ? t(project.buttonTextKey)
                          : t("projects.viewProject")}
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
