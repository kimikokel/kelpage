"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Code,
  Briefcase,
  Coffee,
  Mail,
  Menu,
  X,
  Music,
  CoffeeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../hooks/useTranslation";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isInitialized } = useTranslation();

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#161b22]">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Music className="h-8 w-8" />
          </motion.div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
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
                <Star></Star>&nbsp;{t("navigation.overview")}
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className={cn("text-[#c9d1d9] hover:text-white")}
              >
                <Code></Code>&nbsp;{t("navigation.skills")}
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className={cn("text-[#c9d1d9] hover:text-white")}
              >
                <Briefcase></Briefcase>&nbsp;{t("navigation.projects")}
              </TabsTrigger>
              <TabsTrigger
                value="funfacts"
                className={cn("text-[#c9d1d9] hover:text-white")}
              >
                <CoffeeIcon></CoffeeIcon> &nbsp;{t("navigation.funFacts")}
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={cn("text-[#c9d1d9] hover:text-white")}
              >
                <Mail></Mail>&nbsp;{t("navigation.contact")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <LanguageSwitcher />
          <Avatar className="h-8 w-8 border-2 border-[#30363d]">
            <AvatarImage src="/pp2.jpg?height=80&width=80" alt="@username" />
            <AvatarFallback>kel</AvatarFallback>
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
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md text-left transition-colors",
                    activeTab === "overview"
                      ? "bg-[#58a6ff] text-white"
                      : "text-[#c9d1d9] hover:text-white hover:bg-[#30363d]"
                  )}
                >
                  <Star className="mr-3 h-4 w-4" />
                  {t("navigation.overview")}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("skills");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md text-left transition-colors",
                    activeTab === "skills"
                      ? "bg-[#58a6ff] text-white"
                      : "text-[#c9d1d9] hover:text-white hover:bg-[#30363d]"
                  )}
                >
                  <Code className="mr-3 h-4 w-4" />
                  {t("navigation.skills")}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("projects");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md text-left transition-colors",
                    activeTab === "projects"
                      ? "bg-[#58a6ff] text-white"
                      : "text-[#c9d1d9] hover:text-white hover:bg-[#30363d]"
                  )}
                >
                  <Briefcase className="mr-3 h-4 w-4" />
                  {t("navigation.projects")}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("funfacts");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md text-left transition-colors",
                    activeTab === "funfacts"
                      ? "bg-[#58a6ff] text-white"
                      : "text-[#c9d1d9] hover:text-white hover:bg-[#30363d]"
                  )}
                >
                  <CoffeeIcon className="mr-3 h-4 w-4" />
                  {t("navigation.funFacts")}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("contact");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-md text-left transition-colors",
                    activeTab === "contact"
                      ? "bg-[#58a6ff] text-white"
                      : "text-[#c9d1d9] hover:text-white hover:bg-[#30363d]"
                  )}
                >
                  <Mail className="mr-3 h-4 w-4" />
                  {t("navigation.contact")}
                </button>
              </div>
              <div className="pt-2 border-t border-[#30363d]">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
