"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const educationData = [
  {
    title: "education.mathScience.title",
    institution: "education.mathScience.institution",
    period: "education.mathScience.period",
    description: "education.mathScience.description",
  },
  {
    title: "education.informatics.title",
    institution: "education.informatics.institution",
    period: "education.informatics.period",
    description: "education.informatics.description",
  },
];

const experienceData = [
  {
    title: "experience.intern.title",
    company: "experience.intern.company",
    period: "experience.intern.period",
    description: "experience.intern.description",
  },
];

export function ExperienceEducation() {
  const { t } = useTranslation();

  const leftColumnVariants = {
    hidden: { x: -100, opacity: 0 },
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
          {/* EDUCATION */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">{t("section.education")}</h2>
            </div>

            <div className="relative border-l-2 border-border ml-6 pl-8 space-y-12">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" /> {t(edu.period)}
                  </span>

                  <h3 className="text-xl font-bold">{t(edu.title)}</h3>
                  <p className="font-medium">{t(edu.institution)}</p>
                  <p className="text-muted-foreground text-md">
                    {t(edu.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">{t("section.experience")}</h2>
            </div>

            <div className="relative border-l-2 border-border ml-6 pl-8 space-y-12">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" /> {t(exp.period)}
                  </span>

                  <h3 className="text-xl font-bold">{t(exp.title)}</h3>
                  <p className="font-medium">{t(exp.company)}</p>
                  <p className="text-muted-foreground text-md">
                    {t(exp.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
