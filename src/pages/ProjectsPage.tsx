
import React from "react";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ScrollToTop";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Projects />
      <ScrollToTop />
    </PageLayout>
  );
}
