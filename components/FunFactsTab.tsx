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

const funFacts = [
  {
    title: "🎮 Gamer at Heart",
    description:
      "I enjoy exploring different game genres, both as a player and a developer.",
    icon: Gamepad,
  },
  {
    title: "🎵 One-Man Band ",
    description:
      "Vocalist, guitarist, bassist, pianist, drummer—call me whatever you want. I am a full band myself.",
    icon: Music2,
  },
  {
    title: "🌏 International Experience",
    description:
      "Born in Macau, studied in Australia, exchanged in Singapore, went to 15+ countries. ",
    icon: Earth,
  },
  {
    title: "👩🏻‍🔧 ISTP Personality",
    description:
      "A mix of logic, curiosity, and a love for hands-on problem-solving.",
    icon: PersonStanding,
  },
  {
    title: "🛠 Tinkerer at Heart",
    description:
      "Whether it's building apps, tweaking game mechanics, or learning new tech, I love figuring out how things work.",
    icon: Hammer,
  },
  {
    title: "🗾 Learning Japanese",
    description:
      "Currently grinding through Duolingo for 320+ days (頑張ります!).",
    icon: Languages,
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
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {colors.map((color) => (
          <motion.div
            key={color}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full cursor-pointer border-2"
            style={{
              backgroundColor: color,
              borderColor: currentColor === color ? "white" : "transparent",
            }}
            onClick={() => setCurrentColor(color)}
          />
        ))}
        <Button
          variant="outline"
          size="sm"
          className="ml-auto border-[#30363d] hover:bg-[#30363d]"
          onClick={clearBoard}
        >
          Clear
        </Button>
      </div>

      <div className="grid grid-cols-10 gap-1 max-w-md mx-auto">
        {pixels.map((pixel, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-sm cursor-pointer border border-[#30363d]"
            style={{ backgroundColor: pixel || "#0d1117" }}
            onClick={() => togglePixel(index)}
          />
        ))}
      </div>

      <p className="text-center text-sm text-[#8b949e] mt-4">
        Create your pixel art by selecting a color and clicking on the grid!
      </p>
    </div>
  );
}

export default function FunFactsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#161b22] border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            Fun Facts About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex gap-4 p-4 border border-[#30363d] rounded-md"
              >
                <div className="mt-1">
                  <fact.icon className="h-6 w-6 text-[#58a6ff]" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{fact.title}</h3>
                  <p className="mt-1 text-[#8b949e]">{fact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161b22] border-[#30363d] mt-6">
        <CardHeader>
          <CardTitle className="text-xl text-white">
            Interactive Pixel Board
          </CardTitle>
          <CardDescription>
            Click on the pixels to create your own art!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PixelBoard />
        </CardContent>
      </Card>
    </motion.div>
  );
}
