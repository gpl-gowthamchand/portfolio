
import React from "react";
import { activities } from "@/lib/data";
import { Activity as ActivityIcon, Lightbulb, BookOpen, Users, ExternalLink } from "lucide-react";

export default function Activity() {
  return (
    <section id="activity" className="section">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="title-gradient">Activity</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          List my activity.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Things I Learned Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Things I learned</h3>
            </div>
            
            <ul className="space-y-4 ml-6">
              {activities.map((activity, index) => (
                <li key={index} className="list-disc ml-4">
                  <a 
                    href="#" 
                    className="text-lg hover:text-primary transition-colors duration-300 border-b border-dashed border-border/40 pb-1"
                  >
                    {activity.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Reading List Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/10 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Reading List</h3>
            </div>
            
            <ul className="space-y-4 ml-6">
              <li className="list-disc ml-4">
                <a 
                  href="#" 
                  className="text-lg hover:text-primary transition-colors duration-300 border-b border-dashed border-border/40 pb-1"
                >
                  One Machine Learning Question Everyday
                </a>
              </li>
            </ul>
          </div>
          
          {/* Bookmarks Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <ExternalLink className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Bookmark</h3>
            </div>
            
            <ul className="space-y-4 ml-6">
              <li className="list-disc ml-4">
                <a 
                  href="#" 
                  className="text-lg hover:text-primary transition-colors duration-300 border-b border-dashed border-border/40 pb-1"
                >
                  Trending color palettes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
