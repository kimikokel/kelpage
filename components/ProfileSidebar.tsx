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
        description: "kellyleong2002@gmail.com",
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
        className="xai-card sticky top-20 p-5"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <p className="xai-eyebrow">Profile</p>
        <Avatar className="mx-auto mt-3 h-56 w-56 rounded-full border border-[#212327] md:mx-0">
          <AvatarImage src="/pp1.jpg?height=256&width=256" alt="@username" />
          <AvatarFallback className="text-4xl"></AvatarFallback>
        </Avatar>
        <h1 className="mt-4 text-2xl font-normal text-white">Kel / Kelly</h1>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#7d8187]">
          @kelxd_
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#dadbdf]">
          {t("common.title")}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-[#7d8187]" />
          <a
            href="https://www.instagram.com/kelxd_/"
            className="text-[#dadbdf] hover:text-white hover:underline"
          >
            Instagram: @kelxd_
          </a>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-[#7d8187]" />
          <button
            onClick={copyEmail}
            className="text-left text-[#dadbdf] hover:text-white hover:underline"
          >
            kellyleong2002@gmail.com
          </button>
        </div>

        <div className="mt-6">
          <Button
            variant={isFollowing ? "default" : "outline"}
            className={`w-full ${
              isFollowing
                ? "border-white bg-white text-[#0a0a0a]"
                : "border-white/25 text-white"
            } ${followBtnShake ? "animate-shake" : ""}`}
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
          <h2 className="xai-eyebrow">{t("common.achievements")}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Star className="h-5 w-5 text-white" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Sparkles className="h-5 w-5 text-[#ff7a17]" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <GitFork className="h-5 w-5 text-[#7d8187]" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
