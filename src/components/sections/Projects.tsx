
import React from "react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { playSoundEffect } from "../SoundEffects";
import ScrollToTop from "../ScrollToTop";

export default function Projects() {
  return (
    <section id="projects" className="section bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="title-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A list of projects I have been working on or built
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="relative bg-card/60 backdrop-blur-sm overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:z-10 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <CardHeader className="py-4">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="py-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-2">
                <div className="flex gap-2 ml-auto">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full flex items-center gap-1 text-xs"
                      onClick={() => {
                        playSoundEffect("click");
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </Button>
                  )}
                  {project.link && (
                    <Button 
                      size="sm" 
                      className="rounded-full flex items-center gap-1 text-xs"
                      onClick={() => {
                        playSoundEffect("click");
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
