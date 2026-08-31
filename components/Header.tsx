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
    <header className="sticky top-0 z-50 border-b border-[#212327] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="xai-pill h-8 w-8 border-[#212327]">
              <Music className="h-4 w-4" />
            </div>
            <span className="xai-eyebrow hidden sm:inline">kel's site</span>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Tabs
            defaultValue="overview"
            className="w-full"
            onValueChange={setActiveTab}
            value={activeTab}
          >
            <TabsList className="gap-1 border-white/10 bg-transparent">
              <TabsTrigger
                value="overview"
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] text-[#7d8187]",
                  "data-[state=active]:text-white",
                )}
              >
                <Star></Star>&nbsp;{t("navigation.overview")}
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] text-[#7d8187]",
                  "data-[state=active]:text-white",
                )}
              >
                <Code></Code>&nbsp;{t("navigation.skills")}
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] text-[#7d8187]",
                  "data-[state=active]:text-white",
                )}
              >
                <Briefcase></Briefcase>&nbsp;{t("navigation.projects")}
              </TabsTrigger>
              <TabsTrigger
                value="funfacts"
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] text-[#7d8187]",
                  "data-[state=active]:text-white",
                )}
              >
                <CoffeeIcon></CoffeeIcon> &nbsp;{t("navigation.funFacts")}
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] text-[#7d8187]",
                  "data-[state=active]:text-white",
                )}
              >
                <Mail></Mail>&nbsp;{t("navigation.contact")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <LanguageSwitcher />
          <Avatar className="h-8 w-8 border border-[#212327]">
            <AvatarImage src="/pp2.jpg?height=80&width=80" alt="@username" />
            <AvatarFallback>kel</AvatarFallback>
          </Avatar>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden border border-[#212327] text-white hover:bg-white/10"
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
            className="md:hidden border-t border-[#212327] bg-[#0a0a0a]"
          >
            <div className="flex flex-col space-y-4 p-4">
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 rounded-full border text-left text-sm transition-colors",
                    activeTab === "overview"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#212327] text-[#dadbdf] hover:border-white/20 hover:bg-white/5",
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
                    "w-full flex items-center px-3 py-2 rounded-full border text-left text-sm transition-colors",
                    activeTab === "skills"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#212327] text-[#dadbdf] hover:border-white/20 hover:bg-white/5",
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
                    "w-full flex items-center px-3 py-2 rounded-full border text-left text-sm transition-colors",
                    activeTab === "projects"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#212327] text-[#dadbdf] hover:border-white/20 hover:bg-white/5",
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
                    "w-full flex items-center px-3 py-2 rounded-full border text-left text-sm transition-colors",
                    activeTab === "funfacts"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#212327] text-[#dadbdf] hover:border-white/20 hover:bg-white/5",
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
                    "w-full flex items-center px-3 py-2 rounded-full border text-left text-sm transition-colors",
                    activeTab === "contact"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-[#212327] text-[#dadbdf] hover:border-white/20 hover:bg-white/5",
                  )}
                >
                  <Mail className="mr-3 h-4 w-4" />
                  {t("navigation.contact")}
                </button>
              </div>
              <div className="pt-2 border-t border-[#212327]">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
