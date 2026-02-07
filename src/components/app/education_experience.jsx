"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const educationData = [
  {
    title: "Math and Science",
    institution: "SMA Xaverius 1 Palembang",
    period: "2019 - 2022",
    description:
      "Graduated with a strong academic foundation in mathematics and science.",
  },
  {
    title: "Informatics",
    institution: "Universitas Multi Data Palembang",
    period: "2022 - 2026",
    description:
      "Graduated with a GPA of 3.66/4.00. Focused on full stack web development, data structures, and database management. Experienced in building web applications using modern frameworks and programming languages, while strengthening problem solving skills, system design, and collaborative project development.",
  },
  // Tambahkan data pendidikan lainnya di sini
];

const experienceData = [
  {
    title: "Web Developer Intern",
    company: "PKBM Sekolah Bintang",
    period: "Feb 2025 -  Jul 2025",
    description:
      "Developed a web-based Student Information System (Buku Induk Siswa) to manage student’s personal data and academic records using Laravel and MySQL. ",
  },
];

export function ExperienceEducation() {
  const leftColumnVariants = {
    hidden: { x: -100, opacity: 0 }, // Mengurangi jarak agar tidak terlalu jauh saat repeat
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const rightColumnVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className="px-6 py-42 bg-background overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Kolom Kiri: Education (Dari Kiri) */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            // Ubah once menjadi false agar animasi dipicu setiap kali masuk viewport
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>

            <div className="relative border-l-2 border-border ml-6 pl-8 space-y-12">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <p className="font-medium text-foreground/80">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kolom Kanan: Experience (Dari Kanan) */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            // Ubah once menjadi false agar animasi dipicu setiap kali masuk viewport
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="relative border-l-2 border-border ml-6 pl-8 space-y-12">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="font-medium text-foreground/80">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
