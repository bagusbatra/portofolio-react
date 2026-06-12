import { useState, useEffect, lazy, Suspense } from "react";
import ProjectsPage from "./components/ProjectsPage";
import BackgroundDecor from "./components/BackgroundDecor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import SEOHead from "./components/SEOHead";
import NotFoundPage from "./components/NotFoundPage";
import SectionSkeleton from "./components/SectionSkeleton";
import { NAV_ITEMS } from "./constants";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const ProblemsSection = lazy(() => import("./components/sections/ProblemsSection"));
const WorkSection = lazy(() => import("./components/sections/WorkSection"));
const ExperienceSection = lazy(() => import("./components/sections/ExperienceSection"));
const KnowledgeSection = lazy(() => import("./components/sections/KnowledgeSection"));
const ServicesSection = lazy(() => import("./components/sections/ServicesSection"));
const ConsultationSection = lazy(() => import("./components/sections/ConsultationSection"));

const VALID_ROUTES = ["/", "/projects"];

export default function App() {
  const [route, setRoute] = useState<string>(() => window.location.pathname);
  const [activeTab, setActiveTab] = useState<string>("village-info-system");
  const [activeSection, setActiveSection] = useState<string>("ecosystem");

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0 });
  };

  const scrollToSection = (id: string) => {
    if (route !== "/") {
      navigateTo("/");
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
    const onPopState = () => {
      const path = window.location.pathname;
      if (!VALID_ROUTES.includes(path)) {
        navigateTo("/");
      } else {
        setRoute(path);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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

  if (!VALID_ROUTES.includes(route)) {
    return <NotFoundPage onBack={() => navigateTo("/")} />;
  }

  if (route === "/projects") {
    return (
      <>
        <SEOHead
          title="All Projects"
          description="Browse a complete portfolio of delivered systems across education, government, enterprise, healthcare, and e-commerce sectors."
          canonicalUrl="https://bagusbatra.dev/projects"
        />
        <ErrorBoundary>
          <ProjectsPage
            onBack={() => navigateTo("/")}
            onConsult={() => { window.location.href = "mailto:bagusbatr@gmail.com"; }}
          />
        </ErrorBoundary>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Systems Architect & Full Stack Developer"
        description="Senior IT Architect and Full Stack Developer specializing in Laravel, React, MySQL, SAP integration, and custom information systems across Indonesia."
        canonicalUrl="https://bagusbatra.dev"
      />
      <div className="min-h-screen bg-brand-dark-base selection:bg-brand-accent selection:text-white relative">
        <BackgroundDecor />

        <Header activeSection={activeSection} scrollToSection={scrollToSection} navigateTo={navigateTo} />

        <main className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-28 xl:px-40 2xl:px-48 space-y-32 py-16">
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <HeroSection scrollToSection={scrollToSection} />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <ProblemsSection />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <WorkSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                navigateTo={navigateTo}
              />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <ExperienceSection />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <KnowledgeSection />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <ServicesSection />
            </Suspense>
          </ErrorBoundary>
        </main>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <ConsultationSection />
          </Suspense>
        </ErrorBoundary>

        <Footer />
      </div>
    </>
  );
}
