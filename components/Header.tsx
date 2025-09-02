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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                suppressHydrationWarning
                className="h-8 w-64 rounded-md bg-[#0d1117] px-3 text-sm text-[#c9d1d9] border border-[#30363d] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent"
              />
            </div>
          </div>
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
            </TabsList>
          </Tabs>
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
              <Link href="#" className="text-[#c9d1d9] hover:text-white">
                Try the search bar
              </Link>
              <Link href="#" className="text-[#c9d1d9] hover:text-white">
                And you'll find out...
              </Link>
              <Link href="#" className="text-[#c9d1d9] hover:text-white">
                That's fake ;D
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
  );
}
