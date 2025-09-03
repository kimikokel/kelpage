"use client";

import { useTranslation } from "../hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { locale, switchLanguage, t } = useTranslation();

  console.log("Current locale in LanguageSwitcher:", locale);

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
  ];

  const handleLanguageSwitch = (newLocale: string) => {
    console.log("Language switch clicked:", newLocale);
    switchLanguage(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find((lang) => lang.code === locale)?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageSwitch(language.code)}
            className={`gap-2 ${locale === language.code ? "bg-accent" : ""}`}
          >
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
