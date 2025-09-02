"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Code, Briefcase, Coffee, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Import the separated components
import Header from "@/components/Header";
import ProfileSidebar from "@/components/ProfileSidebar";
import OverviewTab from "@/components/OverviewTab";
import SkillsTab from "@/components/SkillsTab";
import ProjectsTab from "@/components/ProjectsTab";
import FunFactsTab from "@/components/FunFactsTab";
import ContactTab from "@/components/ContactTab";

export default function Portfolio() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kellyleong2002@gmail.com");
    toast({
      title: "Email copied to clipboard",
      description: "kellyleong2002@gmail.com",
    });
    triggerShake();
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container px-4 py-8">
        {/* Profile section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <ProfileSidebar triggerShake={triggerShake} />

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
                  <OverviewTab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </TabsContent>

                <TabsContent value="skills" className="mt-6">
                  <SkillsTab />
                </TabsContent>

                <TabsContent value="projects" className="mt-6">
                  <ProjectsTab />
                </TabsContent>

                <TabsContent value="funfacts" className="mt-6">
                  <FunFactsTab />
                </TabsContent>

                <TabsContent value="contact" className="mt-6">
                  <ContactTab
                    copyEmail={copyEmail}
                    triggerShake={triggerShake}
                  />
                </TabsContent>
              </motion.div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
