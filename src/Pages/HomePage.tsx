"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import SectionAboutCompany from "@/components/Sections/SectionAboutCompany";
import SectionPurposesCompany from "@/components/Sections/SectionPurposesCompany";
import SectionQualityPoliciesCompany from "@/components/Sections/SectionQualityPoliciesCompany";
import SectionUbicationCompany from "@/components/Sections/SectionUbicationCompany";
import SectionValuesCompany from "@/components/Sections/SectionValuesCompany";
import SectionFooterInfoCompany from "@/components/Sections/SectionFooterInfoCompany";
import Hero from "@/components/Hero/Hero";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="acerca-de" className="scroll-mt-24">
          <SectionAboutCompany />
        </section>
        <section id="mision-y-vision" className="scroll-mt-24">
          <SectionPurposesCompany />
        </section>
        <section id="politicas-de-calidad" className="scroll-mt-24">
          <SectionQualityPoliciesCompany />
        </section>
        <section id="ubicacion" className="scroll-mt-24">
          <SectionUbicationCompany />
        </section>
        <section id="valores" className="scroll-mt-24">
          <SectionValuesCompany />
        </section>
        <section id="horario-atencion" className="scroll-mt-24">
          <SectionFooterInfoCompany />
        </section>
      </main>
    </>
  );
}
