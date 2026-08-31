"use client";

import { motion } from "framer-motion";
import { Star, Code, Briefcase, Coffee, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "../hooks/useTranslation";

interface OverviewTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function OverviewTab({
  activeTab,
  setActiveTab,
}: OverviewTabProps) {
  const { t, isInitialized } = useTranslation();
  const educationItems = t("overview.education.items").split("|");
  const quickNav = [
    {
      name: t("navigation.skills"),
      icon: Code,
      description: t("overview.nav.skillsDesc"),
      tab: "skills",
    },
    {
      name: t("navigation.projects"),
      icon: Briefcase,
      description: t("overview.nav.projectsDesc"),
      tab: "projects",
    },
    {
      name: t("navigation.funFacts"),
      icon: Coffee,
      description: t("overview.nav.funFactsDesc"),
      tab: "funfacts",
    },
    {
      name: t("navigation.contact"),
      icon: Mail,
      description: t("overview.nav.contactDesc"),
      tab: "contact",
    },
  ];

  const stats = [
    { label: t("overview.stats.coding"), count: "40+" },
    { label: t("overview.stats.games"), count: "5+" },
    { label: t("overview.stats.audio"), count: "30+" },
    { label: t("overview.stats.video"), count: "30+" },
  ];

  // Don't render until translations are initialized
  if (!isInitialized) {
    return <div>{t("common.loading")}</div>;
  }

  const formatText = (text: string) => {
    return text.split("|").map((line, index) => (
      <span key={index}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
        {index < text.split("|").length - 1 && <br />}
      </span>
    ));
  };

  const renderHTML = (text: string) => {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="xai-card border-white/10 transition-colors duration-300 hover:border-white/25">
            <CardHeader className="border-b border-[#212327] pb-4">
              <p className="xai-eyebrow">Profile Summary</p>
              <CardTitle className="mt-2 flex items-center gap-2 text-2xl font-normal text-white md:text-3xl md:tracking-[-0.04em]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                  <span className="text-sm">K</span>
                </div>
                {t("overview.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-[#dadbdf]">
                {renderHTML(t("overview.greeting"))}
              </p>
              <p className="mt-4 leading-relaxed text-[#dadbdf]">
                {formatText(t("overview.services"))}
              </p>
              <p className="mt-4 leading-relaxed text-[#dadbdf]">
                {renderHTML(t("overview.offering"))}
              </p>
              <div className="mt-6 rounded-lg border border-[#212327] bg-[#1a1c20] p-4">
                <h3 className="xai-eyebrow text-white/80">
                  {t("overview.education.title")}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#dadbdf] marker:text-[#7d8187]">
                  {educationItems.map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -2 }}
            className="transition-all duration-200"
          >
            <Card className="xai-card h-full border-white/10 hover:border-white/20">
              <CardHeader className="border-b border-[#212327] pb-4">
                <p className="xai-eyebrow">Navigation</p>
                <CardTitle className="mt-2 flex items-center gap-2 text-xl text-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                    <Code className="h-4 w-4" />
                  </div>
                  {t("overview.nav.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
                {quickNav.map((link, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "cursor-pointer rounded-lg border p-4 transition-colors duration-200",
                        activeTab === link.tab
                          ? "border-white/30 bg-white/[0.04]"
                          : "border-[#212327] bg-[#1a1c20] hover:border-white/20"
                      )}
                      onClick={() => setActiveTab(link.tab)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                          <link.icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-normal text-white">
                          {link.name}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7d8187]">
                        {link.description}
                      </p>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -2 }}
            className="transition-all duration-200"
          >
            <Card className="xai-card h-full border-white/10 hover:border-white/20">
              <CardHeader className="border-b border-[#212327] pb-4">
                <p className="xai-eyebrow">Metrics</p>
                <CardTitle className="mt-2 flex items-center gap-2 text-xl text-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                    <Star className="h-4 w-4" />
                  </div>
                  {t("overview.stats.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {stats.map((stat, index) => {
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between rounded-lg border border-[#212327] bg-[#1a1c20] p-4 transition-colors duration-200 hover:border-white/20"
                      >
                        <span className="text-sm text-[#dadbdf]">
                          {stat.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-[#ff7a17]" />
                          <span className="font-mono text-sm text-white">
                            {stat.count}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
