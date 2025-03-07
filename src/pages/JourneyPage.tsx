
import React from "react";
import PageLayout from "@/components/PageLayout";
import Journey from "@/components/sections/Journey";
import ScrollToTop from "@/components/ScrollToTop";

export default function JourneyPage() {
  return (
    <PageLayout>
      <Journey />
      <ScrollToTop />
    </PageLayout>
  );
}
