
import React from "react";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Activity from "@/components/sections/Activity";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <ScrollToTop />
    </PageLayout>
  );
}
