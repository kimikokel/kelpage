"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Wrench,
  Gamepad2,
  Camera,
  Music,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "../hooks/useTranslation";

// Define color schemes for different categories
const categoryStyles = {
  programming: {
    bg: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    skillBg: "bg-blue-500/20",
    skillBorder: "border-blue-500/40",
    skillHover: "hover:bg-blue-500/30 hover:border-blue-400/60",
    icon: Code,
  },
  frontend: {
    bg: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    skillBg: "bg-emerald-500/20",
    skillBorder: "border-emerald-500/40",
    skillHover: "hover:bg-emerald-500/30 hover:border-emerald-400/60",
    icon: Palette,
  },
  backend: {
    bg: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    skillBg: "bg-orange-500/20",
    skillBorder: "border-orange-500/40",
    skillHover: "hover:bg-orange-500/30 hover:border-orange-400/60",
    icon: Database,
  },
  devtools: {
    bg: "bg-gradient-to-r from-purple-500/10 to-violet-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    skillBg: "bg-purple-500/20",
    skillBorder: "border-purple-500/40",
    skillHover: "hover:bg-purple-500/30 hover:border-purple-400/60",
    icon: Wrench,
  },
  design: {
    bg: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    skillBg: "bg-pink-500/20",
    skillBorder: "border-pink-500/40",
    skillHover: "hover:bg-pink-500/30 hover:border-pink-400/60",
    icon: Palette,
  },
  game: {
    bg: "bg-gradient-to-r from-cyan-500/10 to-teal-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    skillBg: "bg-cyan-500/20",
    skillBorder: "border-cyan-500/40",
    skillHover: "hover:bg-cyan-500/30 hover:border-cyan-400/60",
    icon: Gamepad2,
  },
  media: {
    bg: "bg-gradient-to-r from-yellow-500/10 to-amber-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    skillBg: "bg-yellow-500/20",
    skillBorder: "border-yellow-500/40",
    skillHover: "hover:bg-yellow-500/30 hover:border-yellow-400/60",
    icon: Camera,
  },
  audio: {
    bg: "bg-gradient-to-r from-indigo-500/10 to-blue-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    skillBg: "bg-indigo-500/20",
    skillBorder: "border-indigo-500/40",
    skillHover: "hover:bg-indigo-500/30 hover:border-indigo-400/60",
    icon: Music,
  },
};

export default function SkillsTab() {
  const { t, isInitialized } = useTranslation();

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#161b22] border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            {t("skills.titleTech")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.programming.bg} ${categoryStyles.programming.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.programming.icon
                  className={`h-5 w-5 ${categoryStyles.programming.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.programming.text}`}
                >
                  {t("skills.language")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "C",
                  "C#",
                  "Java",
                  "Swift",
                  "PHP",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`${categoryStyles.programming.skillBg} border ${categoryStyles.programming.skillBorder} ${categoryStyles.programming.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.frontend.bg} ${categoryStyles.frontend.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.frontend.icon
                  className={`h-5 w-5 ${categoryStyles.frontend.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.frontend.text}`}
                >
                  {t("skills.frontend")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "React",
                  "Vue.js",
                  "Next.js",
                  "Nuxt.js",
                  "Vite.js",
                  "React Native",
                  "jQuery",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`${categoryStyles.frontend.skillBg} border ${categoryStyles.frontend.skillBorder} ${categoryStyles.frontend.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.backend.bg} ${categoryStyles.backend.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.backend.icon
                  className={`h-5 w-5 ${categoryStyles.backend.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.backend.text}`}
                >
                  {t("skills.backend")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "MySQL", "REST API"].map(
                  (skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`${categoryStyles.backend.skillBg} border ${categoryStyles.backend.skillBorder} ${categoryStyles.backend.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                    >
                      {skill}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.devtools.bg} ${categoryStyles.devtools.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.devtools.icon
                  className={`h-5 w-5 ${categoryStyles.devtools.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.devtools.text}`}
                >
                  {t("skills.tools")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "CI/CD",
                  "Jenkins",
                  "GitHub Actions",
                  "AWS Cloud",
                  "Linux",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`${categoryStyles.devtools.skillBg} border ${categoryStyles.devtools.skillBorder} ${categoryStyles.devtools.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.design.bg} ${categoryStyles.design.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.design.icon
                  className={`h-5 w-5 ${categoryStyles.design.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.design.text}`}
                >
                  {t("skills.others")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Adobe XD",
                  "Figma",
                  "Arduino",
                  "Project Management Tools",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`${categoryStyles.design.skillBg} border ${categoryStyles.design.skillBorder} ${categoryStyles.design.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="text-xl text-white">
            {t("skills.titleMulti")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.game.bg} ${categoryStyles.game.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.game.icon
                  className={`h-5 w-5 ${categoryStyles.game.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.game.text}`}
                >
                  {t("skills.game3D")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Unity 2D", "Unity 3D", "Maya", "Blender"].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`${categoryStyles.game.skillBg} border ${categoryStyles.game.skillBorder} ${categoryStyles.game.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.media.bg} ${categoryStyles.media.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.media.icon
                  className={`h-5 w-5 ${categoryStyles.media.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.media.text}`}
                >
                  {t("skills.video")}
                </h3>
              </div>
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
                    className={`${categoryStyles.media.skillBg} border ${categoryStyles.media.skillBorder} ${categoryStyles.media.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={`p-4 rounded-lg border ${categoryStyles.audio.bg} ${categoryStyles.audio.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <categoryStyles.audio.icon
                  className={`h-5 w-5 ${categoryStyles.audio.text}`}
                />
                <h3
                  className={`text-lg font-medium ${categoryStyles.audio.text}`}
                >
                  {t("skills.audio")}
                </h3>
              </div>
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
                    className={`${categoryStyles.audio.skillBg} border ${categoryStyles.audio.skillBorder} ${categoryStyles.audio.skillHover} rounded-full px-3 py-1 transition-all duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
