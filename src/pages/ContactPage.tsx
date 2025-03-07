
import React from "react";
import PageLayout from "@/components/PageLayout";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
      <ScrollToTop />
    </PageLayout>
  );
}
