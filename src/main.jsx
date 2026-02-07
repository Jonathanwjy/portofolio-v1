import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.jsx";
import { HeroSection } from "./components/app/hero_section";
import AboutPage from "./components/app/about_me";
import { ExperienceEducation } from "./components/app/education_experience";
import ProjectsPage from "./components/app/project";
import TechStackPage from "./components/app/tech_stack";
import FooterContact from "./components/app/footer_contact";

const Home = () => (
  <>
    <HeroSection />
    <AboutPage />
    <ExperienceEducation />
    <TechStackPage />
    <ProjectsPage />
    <FooterContact />
    {/* Section lain seperti Projects bisa ditambah di sini */}
  </>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
