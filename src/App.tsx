import React, { useState, useEffect } from "react";
import ProjectsPage from "./components/ProjectsPage";
import BackgroundDecor from "./components/BackgroundDecor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProblemsSection from "./components/sections/ProblemsSection";
import WorkSection from "./components/sections/WorkSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import KnowledgeSection from "./components/sections/KnowledgeSection";
import ServicesSection from "./components/sections/ServicesSection";
import ConsultationSection from "./components/sections/ConsultationSection";
import { NAV_ITEMS } from "./constants";

export default function App() {
  const [route, setRoute] = useState<string>(() => window.location.pathname);
  const [activeTab, setActiveTab] = useState<string>("village-info-system");
  const [activeSection, setActiveSection] = useState<string>("ecosystem");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Academic Portal (SIS)",
    message: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real database dispatch or webhook notification and show feedback
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        company: "",
        projectType: "Academic Portal (SIS)",
        message: ""
      });
    }, 4000);
  };

  // Simple client-side navigation between the home page and the project archive
  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0 });
  };

  // Scroll helper
  const scrollToSection = (id: string) => {
    if (route !== "/") {
      navigateTo("/");
      // Allow the home page to mount before scrolling to the target section
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) {
            setActiveSection(id);
            el.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Highlight the nav link of whichever section is currently in view
  useEffect(() => {
    if (route !== "/") return;

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [route]);

  if (route === "/projects") {
    return (
      <ProjectsPage
        onBack={() => navigateTo("/")}
        onConsult={() => scrollToSection("consultation-hub")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark-base selection:bg-brand-accent selection:text-white relative">
      <BackgroundDecor />

      <Header activeSection={activeSection} scrollToSection={scrollToSection} navigateTo={navigateTo} />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-28 xl:px-40 2xl:px-48 space-y-32 py-16">
        <HeroSection scrollToSection={scrollToSection} />
        <ProblemsSection />
        <WorkSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrollToSection={scrollToSection}
          navigateTo={navigateTo}
        />
        <ExperienceSection />
        <KnowledgeSection scrollToSection={scrollToSection} />
        <ServicesSection scrollToSection={scrollToSection} />
        <ConsultationSection
          contactForm={contactForm}
          formSubmitted={formSubmitted}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}
