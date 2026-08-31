"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad,
  Music2,
  Earth,
  PersonStanding,
  Hammer,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "../hooks/useTranslation";

const DUOLINGO_STREAK_START = "2024-11-20";

// Define color schemes for different fun facts
const factStyles = {
  gaming: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-[#7c3aed]/15",
    iconColor: "text-[#c4b5fd]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
  music: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-[#ff7a17]/15",
    iconColor: "text-[#ffc285]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
  travel: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-[#dadbdf]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
  personality: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-[#dadbdf]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
  tinkering: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-[#dadbdf]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
  language: {
    bg: "bg-[#1a1c20]",
    border: "border-[#212327]",
    iconBg: "bg-white/10",
    iconColor: "text-[#dadbdf]",
    titleColor: "text-white",
    hover: "hover:border-white/25",
  },
};

const funFacts = [
  {
    titleKey: "funFacts.fact1-title",
    descriptionKey: "funFacts.fact1",
    icon: Gamepad,
    style: factStyles.gaming,
  },
  {
    titleKey: "funFacts.fact2-title",
    descriptionKey: "funFacts.fact2",
    icon: Music2,
    style: factStyles.music,
  },
  {
    titleKey: "funFacts.fact3-title",
    descriptionKey: "funFacts.fact3",
    icon: Earth,
    style: factStyles.travel,
  },
  {
    titleKey: "funFacts.fact4-title",
    descriptionKey: "funFacts.fact4",
    icon: PersonStanding,
    style: factStyles.personality,
  },
  {
    titleKey: "funFacts.fac5-title",
    descriptionKey: "funFacts.fact5",
    icon: Hammer,
    style: factStyles.tinkering,
  },
  {
    titleKey: "funFacts.fact6-title",
    descriptionKey: "funFacts.fact6",
    icon: Languages,
    style: factStyles.language,
  },
];

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
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col gap-3 rounded-lg border border-[#212327] bg-[#1a1c20] p-3 sm:flex-row md:p-4">
        <div className="flex flex-wrap gap-1 md:gap-2 flex-1 justify-center sm:justify-start">
          {colors.map((color) => (
            <motion.div
              key={color}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 md:w-10 md:h-10 rounded-full cursor-pointer border-2 shadow-lg"
              style={{
                backgroundColor: color,
                borderColor:
                  currentColor === color ? "#ffffff" : "rgba(255,255,255,0.2)",
                boxShadow:
                  currentColor === color ? `0 0 0 2px ${color}40` : "none",
              }}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-xs text-white md:text-sm"
          onClick={clearBoard}
        >
          Clear Board
        </Button>
      </div>

      <div className="rounded-lg border border-[#212327] bg-[#0a0a0a] p-2 md:p-6">
        <div className="mx-auto grid max-w-xs grid-cols-10 gap-0.5 rounded-lg border border-[#212327] bg-black/20 p-2 md:max-w-md md:gap-1 md:p-4">
          {pixels.map((pixel, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-5 w-5 cursor-pointer rounded-sm border border-[#212327] transition-all duration-150 md:h-8 md:w-8"
              style={{
                backgroundColor: pixel || "#0d1117",
                boxShadow: pixel ? `0 0 4px ${pixel}60` : "none",
              }}
              onClick={() => togglePixel(index)}
            />
          ))}
        </div>
      </div>

      <p className="px-2 text-center text-xs italic text-[#7d8187] md:text-sm">
        🎨 Select a color above and click on the grid to create your
        masterpiece!
      </p>
    </div>
  );
}

export default function FunFactsTab() {
  const { t, isInitialized } = useTranslation();

  const getDuolingoStreakDays = () => {
    const [startYear, startMonth, startDay] =
      DUOLINGO_STREAK_START.split("-").map(Number);
    const today = new Date();
    const startDate = Date.UTC(startYear, startMonth - 1, startDay);
    const currentDate = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    return Math.max(
      0,
      Math.floor((currentDate - startDate) / millisecondsPerDay),
    );
  };

  const duolingoStreakDays = getDuolingoStreakDays();

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
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/20 p-2">
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>
            <div>
              <p className="xai-eyebrow">Personality</p>
              <CardTitle className="text-xl text-white">{t("funFacts.title")}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <div className="grid gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  marginTop: "1rem",
                }}
                className={`flex gap-4 p-6 border rounded-lg ${fact.style.bg} ${fact.style.border} ${fact.style.hover} transition-all duration-200 items-center`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${fact.style.iconBg} flex-shrink-0 flex items-center justify-center`}
                >
                  <fact.icon className={`h-6 w-6 ${fact.style.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`mb-2 text-lg font-normal ${fact.style.titleColor}`}
                  >
                    {t(fact.titleKey)}
                  </h3>
                  <p className="leading-relaxed text-[#dadbdf]">
                    {t(
                      fact.descriptionKey,
                      fact.descriptionKey === "funFacts.fact6"
                        ? { days: duolingoStreakDays }
                        : undefined,
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="xai-card mt-6 overflow-hidden">
        <CardHeader className="border-b border-[#212327]">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/20 p-2">
              <div className="h-4 w-4 rounded-sm bg-[#ff7a17]"></div>
            </div>
            <div>
              <p className="xai-eyebrow">Interactive</p>
              <CardTitle className="text-xl text-white">{t("board.title")}</CardTitle>
              <CardDescription className="text-[#7d8187]">
                {t("board.description")}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="bg-[#191919] p-6">
          <PixelBoard />
        </CardContent>
      </Card>
    </motion.div>
  );
}
