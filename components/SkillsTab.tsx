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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "../hooks/useTranslation";

// Define color schemes for different categories
const categoryStyles = {
  programming: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-white",
    skillBg: "bg-transparent",
    skillBorder: "border-white/20",
    skillHover: "hover:border-white/40 hover:bg-white/[0.05]",
    icon: Code,
  },
  frontend: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#dadbdf]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-white/35 hover:bg-white/[0.04]",
    icon: Palette,
  },
  backend: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#ffc285]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-[#ff7a17]/45 hover:bg-[#ff7a17]/10",
    icon: Database,
  },
  devtools: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#c4b5fd]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-[#7c3aed]/50 hover:bg-[#7c3aed]/10",
    icon: Wrench,
  },
  design: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#dadbdf]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-white/35 hover:bg-white/[0.04]",
    icon: Palette,
  },
  game: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#a0c3ec]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-[#a0c3ec]/45 hover:bg-[#a0c3ec]/10",
    icon: Gamepad2,
  },
  media: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#dadbdf]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-white/35 hover:bg-white/[0.04]",
    icon: Camera,
  },
  audio: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    text: "text-[#dadbdf]",
    skillBg: "bg-transparent",
    skillBorder: "border-[#212327]",
    skillHover: "hover:border-white/35 hover:bg-white/[0.04]",
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
      <Card className="xai-card overflow-hidden">
        <CardHeader className="border-b border-[#212327]">
          <p className="xai-eyebrow">Engineering Stack</p>
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
                  className={`text-lg font-normal ${categoryStyles.programming.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.frontend.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.backend.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.devtools.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.design.text}`}
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

        <CardHeader className="border-y border-[#212327]">
          <p className="xai-eyebrow">Creative Stack</p>
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
                  className={`text-lg font-normal ${categoryStyles.game.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.media.text}`}
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
                  className={`text-lg font-normal ${categoryStyles.audio.text}`}
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
