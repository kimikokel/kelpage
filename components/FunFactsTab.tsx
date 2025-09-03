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

// Define color schemes for different fun facts
const factStyles = {
  gaming: {
    bg: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    titleColor: "text-purple-300",
    hover: "hover:bg-purple-500/15 hover:border-purple-400/50",
  },
  music: {
    bg: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/30",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
    titleColor: "text-pink-300",
    hover: "hover:bg-pink-500/15 hover:border-pink-400/50",
  },
  travel: {
    bg: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    titleColor: "text-emerald-300",
    hover: "hover:bg-emerald-500/15 hover:border-emerald-400/50",
  },
  personality: {
    bg: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/30",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    titleColor: "text-amber-300",
    hover: "hover:bg-amber-500/15 hover:border-amber-400/50",
  },
  tinkering: {
    bg: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    titleColor: "text-blue-300",
    hover: "hover:bg-blue-500/15 hover:border-blue-400/50",
  },
  language: {
    bg: "bg-gradient-to-r from-red-500/10 to-pink-500/10",
    border: "border-red-500/30",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    titleColor: "text-red-300",
    hover: "hover:bg-red-500/15 hover:border-red-400/50",
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
      <div className="flex flex-col sm:flex-row gap-3 p-3 md:p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg">
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
          className="border-violet-500/30 hover:bg-violet-500/20 text-violet-300 hover:text-violet-200 text-xs md:text-sm"
          onClick={clearBoard}
        >
          Clear Board
        </Button>
      </div>

      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-2 md:p-6 rounded-lg border border-gray-700/30">
        <div className="grid grid-cols-10 gap-0.5 md:gap-1 max-w-xs md:max-w-md mx-auto p-2 md:p-4 bg-black/20 rounded-lg border border-gray-600/20">
          {pixels.map((pixel, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 h-5 md:w-8 md:h-8 rounded-sm cursor-pointer border border-gray-600/40 transition-all duration-150"
              style={{
                backgroundColor: pixel || "#0d1117",
                boxShadow: pixel ? `0 0 4px ${pixel}60` : "none",
              }}
              onClick={() => togglePixel(index)}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-xs md:text-sm text-violet-200/60 italic px-2">
        🎨 Select a color above and click on the grid to create your
        masterpiece!
      </p>
    </div>
  );
}

export default function FunFactsTab() {
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
      <Card className="bg-[#161b22] border-[#30363d] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b border-indigo-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <div className="w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
            </div>
            <CardTitle className="text-xl text-indigo-300">
              {t("funFacts.title")}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <div className="grid gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.2 }}
                style={{
                  marginTop: "1.3rem",
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
                    className={`font-semibold text-lg ${fact.style.titleColor} mb-2`}
                  >
                    {t(fact.titleKey)}
                  </h3>
                  <p className="text-[#c9d1d9] leading-relaxed">
                    {t(fact.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161b22] border-[#30363d] mt-6 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-b border-violet-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <div className="w-5 h-5 bg-gradient-to-br from-violet-400 to-purple-400 rounded-sm"></div>
            </div>
            <div>
              <CardTitle className="text-xl text-violet-300">
                {t("board.title")}
              </CardTitle>
              <CardDescription className="text-violet-200/70">
                {t("board.description")}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-6">
          <PixelBoard />
        </CardContent>
      </Card>
    </motion.div>
  );
}
