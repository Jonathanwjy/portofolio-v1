"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Install lucide-react jika belum
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Education & Experience", link: "education" },
  { name: "Tech", link: "tech" },
  { name: "Projects", link: "projects" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false); // Tutup menu setelah klik di mobile
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
        {/* Desktop & Mobile Header Container */}
        <nav className="flex items-center gap-2 p-2 rounded-full border border-border bg-primary shadow-lg z-1">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Items - Desktop Only */}
          <div className="hidden md:flex items-center bg-muted rounded-full px-2 py-1 gap-1 border border-border">
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                item={item}
                isActive={activeSection === item.link}
                onClick={scrollToSection}
              />
            ))}
          </div>

          <a
            href="#contact"
            className="px-5 md:px-6 py-2 text-sm font-bold text-secondary-foreground bg-secondary border border-border rounded-full hover:bg-accent transition-all active:scale-95"
          >
            Contact
          </a>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
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
                  key={item.name}
                  onClick={() => scrollToSection(item.link)}
                  className={cn(
                    "w-full px-6 py-4 rounded-2xl text-left font-medium transition-all",
                    activeSection === item.link
                      ? "bg-secondary text-secondary-foreground"
                      : "text-primary-foreground hover:bg-white/10",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Sub-komponen untuk merapikan kode tombol navigasi desktop
function NavButton({ item, isActive, onClick }) {
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
        {item.name}
      </span>
    </button>
  );
}
