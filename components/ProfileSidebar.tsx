"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Star, Sparkles, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

interface ProfileSidebarProps {
  triggerShake: () => void;
}

export default function ProfileSidebar({ triggerShake }: ProfileSidebarProps) {
  const { toast } = useToast();
  const { t, isInitialized } = useTranslation();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followBtnShake, setFollowBtnShake] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowBtnShake(true);
    setTimeout(() => setFollowBtnShake(false), 500);
  };

  const copyEmail = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("kellyleong2002@gmail.com");
      toast({
        title: "Email copied to clipboard",
        description: "kellyleong@gmail.com",
      });
      triggerShake();
    }
  };

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:col-span-1">
      <motion.div
        className="sticky top-20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Avatar className="h-64 w-64 mx-auto md:mx-0 border-4 border-[#30363d] rounded-full">
          <AvatarImage src="/pp1.jpg?height=256&width=256" alt="@username" />
          <AvatarFallback className="text-4xl"></AvatarFallback>
        </Avatar>
        <h1 className="mt-4 text-2xl font-bold">Kel / Kelly</h1>
        <p className="text-[#8b949e]">@kelxd_</p>
        <p className="mt-4">{t("common.title")}</p>

        <div className="mt-4 flex items-center gap-2">
          <User className="h-4 w-4 text-[#8b949e]" />
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
          <h2 className="text-lg font-semibold">{t("common.achievements")}</h2>
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
  );
}
