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

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
  ];

  const handleLanguageSwitch = (newLocale: string) => {
    switchLanguage(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-white/20 bg-transparent text-white"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find((lang) => lang.code === locale)?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageSwitch(language.code)}
            className={`gap-2 rounded-md ${
              locale === language.code
                ? "bg-white/10 text-white"
                : "text-[#dadbdf]"
            }`}
          >
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
