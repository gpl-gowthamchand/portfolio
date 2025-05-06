
import React from "react";
import { useNavigate } from "react-router-dom";
import { about, experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { playSoundEffect } from "../SoundEffects";
import ScrollToTop from "../ScrollToTop";

export default function About() {
  const navigate = useNavigate();
  
  return (
    <section id="about" className="section bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">{about.title}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">{about.description}</p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-medium">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/80 hover:bg-primary/10 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-fade-in w-3/4 max-w-xs">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="./public/myPhoto.jpg" 
                    alt="My Photo"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="my-12 space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center">
            <span className="title-gradient">Experience Highlights</span>
          </h3>
          
          <div className="space-y-6 animate-fade-in">
            {experiences.slice(0, 2).map((experience, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium">{experience.title}</h4>
                  <p className="text-sm text-muted-foreground">{experience.company} | {experience.period}</p>
                  <p className="mt-2">{experience.description.slice(0, 120)}...</p>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Button 
                onClick={() => {
                  playSoundEffect("click");
                  navigate("/experience");
                }}
                className="rounded-full flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                View Full Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
