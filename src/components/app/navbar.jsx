"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", link: "home" },
  { key: "about", link: "about" },
  { key: "education", link: "education" },
  { key: "tech", link: "tech" },
  { key: "projects", link: "projects" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.link),
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed top-6 md:top-10 inset-x-0 z-40 flex justify-center px-4"
      >
        <nav className="flex items-center gap-2 p-2 rounded-full border border-border bg-primary shadow-lg">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:bg-white/10 rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-muted rounded-full px-2 py-1 gap-1 border border-border">
            {navItems.map((item) => (
              <NavButton
                key={item.key}
                item={item}
                isActive={activeSection === item.link}
                onClick={scrollToSection}
              />
            ))}
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 md:px-6 py-2 text-sm font-bold text-secondary-foreground bg-secondary border border-border rounded-full hover:bg-accent transition-all active:scale-95"
          >
            {t("nav.contact")}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-muted rounded-full border border-border overflow-hidden">
            <LangButton
              active={i18n.language === "id"}
              onClick={() => changeLang("id")}
            >
              ID
            </LangButton>
            <LangButton
              active={i18n.language === "en"}
              onClick={() => changeLang("en")}
            >
              EN
            </LangButton>
          </div>

          <ModeToggle />
        </nav>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-24 z-[4999] md:hidden"
          >
            <div className="flex flex-col gap-2 p-4 rounded-3xl border border-border bg-primary shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.link)}
                  className={cn(
                    "w-full px-6 py-4 rounded-2xl text-left font-medium transition-all",
                    activeSection === item.link
                      ? "bg-secondary text-secondary-foreground"
                      : "text-primary-foreground hover:bg-white/10",
                  )}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Sub Components ---------- */

function NavButton({ item, isActive, onClick }) {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => onClick(item.link)}
      className="group relative px-4 py-2 text-sm font-medium transition-all rounded-full outline-none active:scale-95"
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full z-0 transition-all",
          isActive
            ? "bg-primary shadow-sm"
            : "bg-transparent group-hover:bg-secondary border border-transparent group-hover:border-border",
        )}
      />
      <span
        className={cn(
          "relative z-10",
          isActive
            ? "text-primary-foreground"
            : "text-muted-foreground group-hover:text-foreground",
        )}
      >
        {t(`nav.${item.key}`)}
      </span>
    </button>
  );
}

function LangButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-xs font-semibold transition-all",
        active
          ? "bg-secondary text-secondary-foreground"
          : "text-muted-foreground hover:bg-secondary/50",
      )}
    >
      {children}
    </button>
  );
}
