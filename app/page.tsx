"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Star,
  GitFork,
  Code,
  User,
  Briefcase,
  Coffee,
  Mail,
  Sparkles,
  Moon,
  Menu,
  X,
  Music,
  Video,
  Gamepad,
  Music2,
  Languages,
  PersonStanding,
  Hammer,
  Earth,
  StarHalf,
  Stars,
  HeartIcon,
  Cloud,
  CloudCog,
  CloudDrizzle,
  CloudIcon,
  Cloudy,
  Flower,
  Flower2,
  CoffeeIcon,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

export default function Portfolio() {
  const { toast } = useToast();
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followBtnShake, setFollowBtnShake] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowBtnShake(true);
    setTimeout(() => setFollowBtnShake(false), 500);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kellyleong2002@gmail.com");
    toast({
      title: "Email copied to clipboard",
      description: "kellyleong@gmail.com",
    });
    triggerShake();
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* GitHub-style header */}
      <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#161b22]">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Music className="h-8 w-8" />
            </motion.div>
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-8 w-64 rounded-md bg-[#0d1117] px-3 text-sm text-[#c9d1d9] border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Link href="#" className="text-[#c9d1d9] hover:text-white">
              Hi
            </Link> */}
            <Tabs
              defaultValue="overview"
              className="w-full"
              onValueChange={setActiveTab}
              value={activeTab}
            >
              <TabsList>
                <TabsTrigger
                  value="overview"
                  className={cn("text-[#c9d1d9] hover:text-white")}
                >
                  <Star></Star>&nbsp;Overview
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className={cn("text-[#c9d1d9] hover:text-white")}
                >
                  <Code></Code>&nbsp;Skills
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className={cn("text-[#c9d1d9] hover:text-white")}
                >
                  <Briefcase></Briefcase>&nbsp;Projects
                </TabsTrigger>
                <TabsTrigger
                  value="funfacts"
                  className={cn("text-[#c9d1d9] hover:text-white")}
                >
                  <CoffeeIcon></CoffeeIcon> &nbsp;Fun Facts
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className={cn("text-[#c9d1d9] hover:text-white")}
                >
                  <Mail></Mail>&nbsp;Contact
                </TabsTrigger>
                {/* <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  Am
                </Link>
                <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  Kel 
                </Link> */}
              </TabsList>
            </Tabs>
            <Avatar className="h-8 w-8 border-2 border-[#30363d]">
              <AvatarImage src="/pp2.jpg?height=80&width=80" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#30363d] bg-[#161b22]"
            >
              <div className="flex flex-col space-y-4 p-4">
                <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  Hi
                </Link>
                <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  I
                </Link>
                <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  Am
                </Link>
                <Link href="#" className="text-[#c9d1d9] hover:text-white">
                  Kel
                </Link>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-8 w-full rounded-md bg-[#0d1117] px-3 text-sm text-[#c9d1d9] border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container px-4 py-8">
        {/* Profile section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <motion.div
              className="sticky top-20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Avatar className="h-64 w-64 mx-auto md:mx-0 border-4 border-[#30363d] rounded-full">
                <AvatarImage
                  src="/pp1.jpg?height=256&width=256"
                  alt="@username"
                />
                <AvatarFallback className="text-4xl">UN</AvatarFallback>
              </Avatar>
              <h1 className="mt-4 text-2xl font-bold">Kel / Kelly</h1>
              <p className="text-[#8b949e]">@kelxd_</p>
              <p className="mt-4">
                Full-Stack Developer | Game Developer | Music Producer/Mixer |
                Animator | Video Editor
              </p>

              <div className="mt-4 flex items-center gap-2">
                <User className="h-4 w-4 text-[#8b949e]" />
                {/* <span>IG: @kelxd_</span> */}
                <a
                  href="https://www.instagram.com/kelxd_/"
                  className="text-[#58a6ff] hover:underline"
                >
                  Instagram: @kelxd_
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#8b949e]" />
                <button
                  onClick={copyEmail}
                  className="text-[#58a6ff] hover:underline"
                >
                  kellyleong2002@gmail.com
                </button>
              </div>

              <div className="mt-6">
                <Button
                  className={`w-full ${
                    isFollowing
                      ? "bg-[#ff5c5c] hover:bg-[#ff7070]"
                      : "bg-[#238636] hover:bg-[#2ea043]"
                  } text-white ${followBtnShake ? "animate-shake" : ""}`}
                  onClick={toggleFollow}
                >
                  {isFollowing ? (
                    <span className="flex items-center gap-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        ❤️
                      </motion.div>
                      Following
                    </span>
                  ) : (
                    "Follow"
                  )}
                </Button>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Achievements</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <Star className="h-6 w-6 text-[#f1e05a]" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                    <Sparkles className="h-6 w-6 text-[#58a6ff]" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <GitFork className="h-6 w-6 text-[#8b949e]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <Tabs
              defaultValue="overview"
              className="w-full"
              onValueChange={setActiveTab}
              value={activeTab}
            >
              <TabsList className="grid w-full grid-cols-5 bg-[#161b22] border-b border-[#30363d] rounded-none h-auto">
                <TabsTrigger
                  value="overview"
                  className={cn(
                    "data-[state=active]:border-[#f78166] data-[state=active]:border-b-2 rounded-none py-2 px-4",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className={cn(
                    "data-[state=active]:border-[#f78166] data-[state=active]:border-b-2 rounded-none py-2 px-4",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className={cn(
                    "data-[state=active]:border-[#f78166] data-[state=active]:border-b-2 rounded-none py-2 px-4",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="funfacts"
                  className={cn(
                    "data-[state=active]:border-[#f78166] data-[state=active]:border-b-2 rounded-none py-2 px-4",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  <Coffee className="mr-2 h-4 w-4" />
                  Fun Facts
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className={cn(
                    "data-[state=active]:border-[#f78166] data-[state=active]:border-b-2 rounded-none py-2 px-4",
                    "data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </TabsTrigger>
              </TabsList>

              <motion.div
                className={cn("mt-6", shake ? "animate-shake" : "")}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="overview" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid gap-6">
                      <Card className="bg-[#161b22] border-[#30363d]">
                        <CardHeader>
                          <CardTitle className="text-xl text-white">
                            About Me
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>
                            Hey there! 👋 I’m a Kel / Kelly, a{" "}
                            <strong>full-stack dev</strong> with a creative
                            twist. 💻✨
                          </p>
                          <p className="mt-4">
                            🌐 <strong>Websites</strong> that spark joy,{" "}
                            <br></br>📱 <strong>Apps</strong> that feel like
                            magic,<br></br> 🎮 <strong>Games</strong> that pull
                            you in,
                            <br></br> 🎵 <strong>Music</strong> that makes you
                            move, <br></br>✨ <strong>Animations</strong> that
                            tell stories—
                          </p>
                          <p className="mt-4">
                            I love turning wild ideas into real, clickable,
                            playable things. ✨<br></br>
                            When I’m not coding? Probably lost in a game,
                            jamming on my guitar, or daydreaming up the next big
                            thing. 🚀
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
                                  description:
                                    "Check out my technical skills and expertise",
                                  tab: "skills",
                                },
                                {
                                  name: "Projects",
                                  icon: Briefcase,
                                  description:
                                    "Browse through my portfolio of projects",
                                  tab: "projects",
                                },
                                {
                                  name: "Fun Facts",
                                  icon: Coffee,
                                  description:
                                    "Discover interesting facts about me",
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
                                    activeTab === link.tab &&
                                      "border-[#58a6ff] bg-[#161b22]"
                                  )}
                                  onClick={() => setActiveTab(link.tab)}
                                >
                                  <div className="flex items-center gap-2">
                                    <link.icon className="h-5 w-5 text-[#58a6ff]" />
                                    <h3 className="font-medium text-white">
                                      {link.name}
                                    </h3>
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
                </TabsContent>

                <TabsContent value="skills" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-[#161b22] border-[#30363d]">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          Technical Skills
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Next.js",
                                "Vite.js",
                                "JQuery",
                                "Tailwind CSS",
                                "Bootstrap",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Node.js",
                                "MongoDB",
                                "MySQL",
                                "PHP",
                                "REST API",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Programming / Scripting Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Python",
                                "C",
                                "C#",
                                "Java",
                                "HTML",
                                "CSS",
                                "Javascript",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Tools & Others
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Git",
                                "GitHub",
                                "VS Code",
                                "Project Management Tools",
                                "CI/CD",
                                "Jenkins",
                                "Github Actions",
                                "Adobe XD",
                                "Figma",
                                "AWS Cloud",
                                "Arduino",
                                "Linux",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          Multimedia Related Skills
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Game Development & 3D Design
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {["Unity 2D", "Unity 3D", "Maya", "Blender"].map(
                                (skill) => (
                                  <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                  >
                                    {skill}
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Photo & Video / Animation Production
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Adobe After Effects",
                                "Adobe Premiere Pro",
                                "Adobe Photoshop",
                                "Adobe Illustrator",
                                "Adobe InDesign",
                                "Adobe Animate",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">
                              Music & Audio Production
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Adobe Audition",
                                "Reaper",
                                "Logic Pro",
                                "Cubase",
                                "FL Studio",
                              ].map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  className="bg-[#0d1117] border border-[#30363d] rounded-full px-3 py-1"
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="projects" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
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
                          tech: [
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "AWS Cloud Host",
                          ],
                          image: "/website.jpeg?height=200&width=400",
                          stars: 120,
                          forks: 5,
                        },
                        {
                          title: "Facebook Account Automation System",
                          description:
                            "Like, comment, message, and play games—just like a real person surfing on Facebook, but automated!",
                          tech: [
                            "Python",
                            "Selenium",
                            "Pyautogui",
                            "Chromedriver",
                          ],
                          image: "/fb.jpeg?height=200&width=400",
                          stars: 66,
                          forks: 36,
                          // showButton: false,
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
                          tech: [
                            "Unity 3D",
                            "C#",
                            "Github",
                            "Adobe AE",
                            "Maya",
                            "Adobe Ai",
                          ],
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
                            "UI Design for an Online Bookstore: Women & Children First. This design was created with vanilla HTML. The playful, child-friendly theme matches the bookstore’s focus on women and children.",
                          tech: [
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "Adobe XD",
                            "Adobe Ai",
                          ],
                          image: "/bookstore.jpeg?height=200&width=400",
                          stars: 26,
                          forks: 12,
                          links: "https://kelxd.lol/bookstore",
                          showButton: true,
                          buttonText: "View Design",
                        },
                      ].map((project, index) => (
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
                              <CardDescription>
                                {project.description}
                              </CardDescription>
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
                                onClick={() =>
                                  window.open(project.links, "_blank")?.focus
                                }
                                style={{
                                  display: project.showButton
                                    ? undefined
                                    : "none",
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
                </TabsContent>

                <TabsContent value="funfacts" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-[#161b22] border-[#30363d]">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          Fun Facts About Me
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          {[
                            {
                              title: "🎮 Gamer at Heart",
                              description:
                                "I enjoy exploring different game genres, both as a player and a developer.",
                              icon: Gamepad,
                            },
                            {
                              title: "🎵 One-Man Band ",
                              description:
                                "Vocalist, guitarist, bassist, pianist, drummer—call me whatever you want. I am a full band myself.",
                              icon: Music2,
                            },
                            {
                              title: "🌏 International Experience",
                              description:
                                "Born in Macau, studied in Australia, exchanged in Singapore, went to 15+ countries. ",
                              icon: Earth,
                            },
                            {
                              title: "👩🏻‍🔧 ISTP Personality",
                              description:
                                "A mix of logic, curiosity, and a love for hands-on problem-solving.",
                              icon: PersonStanding,
                            },
                            {
                              title: "🛠 Tinkerer at Heart",
                              description:
                                "Whether it’s building apps, tweaking game mechanics, or learning new tech, I love figuring out how things work.",
                              icon: Hammer,
                            },
                            {
                              title: "🗾 Learning Japanese",
                              description:
                                "Currently grinding through Duolingo for 200+ days (頑張ります!).",
                              icon: Languages,
                            },
                          ].map((fact, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02, x: 10 }}
                              className="flex gap-4 p-4 border border-[#30363d] rounded-md"
                            >
                              <div className="mt-1">
                                <fact.icon className="h-6 w-6 text-[#58a6ff]" />
                              </div>
                              <div>
                                <h3 className="font-medium text-white">
                                  {fact.title}
                                </h3>
                                <p className="mt-1 text-[#8b949e]">
                                  {fact.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#161b22] border-[#30363d] mt-6">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          Interactive Pixel Board
                        </CardTitle>
                        <CardDescription>
                          Click on the pixels to create your own art!
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PixelBoard />
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="contact" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-[#161b22] border-[#30363d]">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          Get In Touch
                        </CardTitle>
                        <CardDescription>
                          Feel free to reach out for collaborations or just a
                          friendly chat
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                              {
                                platform: "Email",
                                handle: "kellyleong2002@gmail.com",
                                action: "Copy",
                                onClick: copyEmail,
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
                            ].map((contact, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col p-4 border border-[#30363d] rounded-md"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <contact.icon className="h-5 w-5 text-[#58a6ff]" />
                                  <h3 className="font-medium">
                                    {contact.platform}
                                  </h3>
                                </div>
                                <p className="text-white mb-4">
                                  {contact.handle}
                                </p>
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
                                    onClick={contact.onClick}
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
                </TabsContent>
              </motion.div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function PixelBoard() {
  const [pixels, setPixels] = useState(Array(10 * 10).fill(false));
  const [currentColor, setCurrentColor] = useState("#58a6ff");

  const colors = [
    "#58a6ff", // blue
    "#f1e05a", // yellow
    "#ff5c5c", // red
    "#39d353", // green
    "#b392f0", // purple
    "#f97583", // pink
    "#ffffff", // white
  ];

  const togglePixel = (index: number) => {
    const newPixels = [...pixels];
    newPixels[index] = currentColor;
    setPixels(newPixels);
  };

  const clearBoard = () => {
    setPixels(Array(10 * 10).fill(false));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {colors.map((color) => (
          <motion.div
            key={color}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full cursor-pointer border-2"
            style={{
              backgroundColor: color,
              borderColor: currentColor === color ? "white" : "transparent",
            }}
            onClick={() => setCurrentColor(color)}
          />
        ))}
        <Button
          variant="outline"
          size="sm"
          className="ml-auto border-[#30363d] hover:bg-[#30363d]"
          onClick={clearBoard}
        >
          Clear
        </Button>
      </div>

      <div className="grid grid-cols-10 gap-1 max-w-md mx-auto">
        {pixels.map((pixel, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-sm cursor-pointer border border-[#30363d]"
            style={{ backgroundColor: pixel || "#0d1117" }}
            onClick={() => togglePixel(index)}
          />
        ))}
      </div>

      <p className="text-center text-sm text-[#8b949e] mt-4">
        Create your pixel art by selecting a color and clicking on the grid!
      </p>
    </div>
  );
}
