
import React from "react";
import PageLayout from "@/components/PageLayout";
import About from "@/components/sections/About";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
      <ScrollToTop />
    </PageLayout>
  );
}
