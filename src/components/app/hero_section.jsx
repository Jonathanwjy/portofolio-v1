"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 lg:pt-20 overflow-hidden bg-background"
      id="home"
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="h-full w-full bg-[size:40px_40px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
      >
        {/* Gambar Profil - Diberi order-first pada mobile agar di paling atas */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end order-first lg:order-last"
        >
          {/* Ukuran disesuaikan: w-60 di HP, w-96 di Desktop */}
          <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary opacity-20"
            />

            <div className="absolute inset-3 lg:inset-4 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <img
                src="/path-to-your-photo.jpg"
                alt="Jonathan Wijaya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label Open To Work - Ukuran disesuaikan */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-6 -right-2 lg:bottom-10 lg:-right-4 bg-card border border-border px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">
                Open to Work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Konten Teks */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.div variants={itemVariants} className="space-y-2">
            {/* Font size disesuaikan: text-3xl di HP, text-6xl di Desktop */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-primary"> Jonathan Wijaya.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            An IT Graduate who focus on Full Stack Web Development. I build
            maintainable, efficient, scalable and user friendly systems to
            ensure optimal performance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4"
          >
            <div className="p-3 lg:p-4 border border-border bg-card rounded-xl shadow-sm">
              <p className="text-[10px] uppercase text-muted-foreground font-semibold mb-1">
                Focus
              </p>
              <p className="text-xs lg:text-sm font-bold">
                FullStack Web Development
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-background font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-6 text-muted-foreground"
          >
            {/* Buat array data link di sini */}
          </motion.div>
          <div className="flex gap-4">
            <SocialLink
              href="https://github.com/Jonathanwjy"
              icon={<Github />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jonathanwjy/"
              icon={<Linkedin />}
            />
            <SocialLink
              href="https://www.instagram.com/jonathanwjy/"
              icon={<Instagram />}
            />
            <SocialLink
              href="mailto:jonathanwijaya062004@gmail.com"
              icon={<Mail />}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          y: { duration: 2, repeat: Infinity },
          opacity: { duration: 0.5 },
        }}
        className="absolute bottom-6 lg:bottom-10"
      >
        <ArrowDown className="text-muted-foreground opacity-50 w-6 h-6" />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-white transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
}
