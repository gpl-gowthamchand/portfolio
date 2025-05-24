import React, { useEffect, useState } from "react";
import { Activity as ActivityIcon, BookOpen, ExternalLink } from "lucide-react";

type LangStats = Record<string, number>;

export default function Activity() {
  const username = "gpl-gowthamchand";
  const [langStats, setLangStats] = useState<LangStats | null>(null);

  // Fetch language stats (most used languages)
  useEffect(() => {
    fetch(`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_progress=true`)
      .then(() => {
        // This endpoint returns SVG, so for real data, you'd need to use GitHub API and aggregate languages from all repos.
        // For demo, we'll just show the SVG below.
      });
  }, []);

  return (
    <section id="activity" className="section">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="title-gradient">Activity</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          My latest activity and stats from various platforms.
        </p>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 1. GitHub General Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/60 rounded-xl shadow p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ActivityIcon className="h-5 w-5 text-primary" /> GitHub Stats
              </h3>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_rank=true&count_private=true&hide=contribs&theme=default`}
                alt="GitHub Stats"
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>
            <div className="bg-card/60 rounded-xl shadow p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Contribution Streak</h3>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default`}
                alt="GitHub Streak"
                className="w-full max-w-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2. Contributions Calendar */}
          <div className="bg-card/60 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Contributions</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=false&hide_title=true&hide=prs,issues,contribs&count_private=true&theme=default`}
              alt="GitHub Contributions"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>

          {/* 3. Most Used Languages */}
          <div className="bg-card/60 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Most Used Languages</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default`}
              alt="Top Languages"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>

          {/* 4. GitHub Trophies */}
          <div className="bg-card/60 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">GitHub Trophies</h3>
            <img
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=flat&margin-w=10`}
              alt="GitHub Trophies"
              className="w-full max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
