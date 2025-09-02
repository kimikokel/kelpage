"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#161b22] border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Vue",
                  "React Native",
                  "Next.js",
                  "Vite.js",
                  "Nuxt.js",
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
              <h3 className="text-lg font-medium mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "MongoDB", "MySQL", "PHP", "REST API"].map(
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
                Programming / Scripting Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C#", "Java", "HTML", "CSS", "Javascript"].map(
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
              <h3 className="text-lg font-medium mb-2">Tools & Others</h3>
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
                {["Unity 2D", "Unity 3D", "Maya", "Blender"].map((skill) => (
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
  );
}
