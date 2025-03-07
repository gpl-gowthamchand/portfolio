
import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSoundEffect } from "../SoundEffects";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="section relative flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="z-10 space-y-6 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
          <span className="text-foreground text-2xl md:text-3xl lg:text-4xl font-medium">Hello, I'm </span>
          <span className="block mt-2 text-primary">G P L Gowtham chand</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        I build intelligent, efficient, and user-focused digital solutions.
        </p>

        <p className="text-lg text-muted-foreground max-w-lg mx-auto animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
        Android & Web Developer with a strong foundation in AI and Data Science, crafting seamless mobile and web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <Button 
            size="lg"
            className="font-medium rounded-full" 
            onClick={() => {
              playSoundEffect("click");
              navigate("/contact");
            }}
          >
            Get in Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="font-medium rounded-full" 
            onClick={() => {
              playSoundEffect("click");
              navigate("/projects");
            }}
          >
            View Projects
          </Button>

          <Button 
            variant="secondary" 
            size="lg"
            className="font-medium rounded-full flex items-center gap-2" 
            onClick={() => {
              playSoundEffect("click");
              window.open("https://drive.google.com/file/d/1oZLgM8W4gWxp1TvSIusBi-XFRHRXAre8/view?usp=drive_link", "_blank");
            }}
          >
            <FileText className="h-5 w-5" />
            Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div 
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            playSoundEffect("click");
            navigate("/about");
          }}
        >
          <span className="text-primary font-medium">Discover More</span>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
