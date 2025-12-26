import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CampusFeatures } from "./components/CampusFeatures";
import { Innovation } from "./components/Innovation";
import { NewsSection } from "./components/NewsSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StudentPortal } from "./components/StudentPortal";
import { AuthPage } from "./components/AuthPage";
import { AdminPanel } from "./components/AdminPanel";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "auth" | "portal" | "admin">("home");

  if (currentPage === "auth") {
    return (
      <AuthPage
        onBack={() => setCurrentPage("home")}
        onLogin={() => setCurrentPage("portal")}
        onAdminLogin={() => setCurrentPage("admin")}
      />
    );
  }

  if (currentPage === "portal") {
    return <StudentPortal onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "admin") {
    return <AdminPanel onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onPortalClick={() => setCurrentPage("auth")} />
      <Hero />
      <Services />
      <CampusFeatures />
      <Innovation />
      <NewsSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}