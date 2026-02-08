"use client";
import React from "react";
import { motion } from "framer-motion";
// Icon tidak digunakan di versi ini, tapi dibiarkan jika nanti butuh
import { Code2, Server, Database, Globe, GraduationCap } from "lucide-react";

export default function AboutPage() {
  // Config animasi fade in
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: false,
      amount: 0.3,
    },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="min-h-4/5 mb-24 bg-background px-6 pt-48" id="about">
      <div className="container max-w-6xl mx-auto">
        {/* Section 1: Introduction */}
        <motion.section
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
          // Grid diubah untuk mengakomodasi gambar di layar medium ke atas
          className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
        >
          {/* Kolom Teks (mengambil 3 dari 5 bagian grid di desktop) */}
          <div className="md:col-span-3 space-y-8">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              About <span className="text-primary">Me.</span>
            </motion.h1>

            <motion.div
              variants={fadeIn}
              className="text-sm md:text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                Informatics graduate with a strong focus on full stack web
                development. Experienced in building web applications using PHP,
                JavaScript, MySQL, React, Tailwind CSS, and Laravel.
              </p>

              <p>
                I enjoy turning ideas and requirements into functional,
                well-structured systems. I am highly curious and motivated to
                continuously improve my skills by exploring new technologies and
                best practices in the web development ecosystem. In addition to
                technical skills, I value teamwork, clear communication, and
                responsibility. I am comfortable working in collaborative
                environments, contributing ideas, and learning from feedback. I
                am eager to grow as a developer and to contribute to meaningful
                projects that solve real-world problems.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 0.8 }} // Sedikit lebih lambat munculnya
            className="md:col-span-2 relative hidden justify-center order-first md:order-last md:flex"
          >
            {/* Efek Glow/Blur di belakang gambar */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform scale-75 z-0" />

            {/* Container Gambar */}
            <div className="relative z-10 w-full max-w-[400px] md:max-w-none">
              <img
                src="/images/work.png"
                alt="Developer working on code"
                className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
