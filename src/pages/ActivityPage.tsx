
import React from "react";
import PageLayout from "@/components/PageLayout";
import Activity from "@/components/sections/Activity";
import ScrollToTop from "@/components/ScrollToTop";

export default function ActivityPage() {
  return (
    <PageLayout>
      <Activity />
      <ScrollToTop />
    </PageLayout>
  );
}
