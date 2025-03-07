
import React, { useState } from "react";
import { journeyPoints } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Map, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSoundEffect } from "../SoundEffects";

export default function Journey() {
  const [showAll, setShowAll] = useState(false);
  // Reverse the points to show present at top
  const reversedPoints = [...journeyPoints].reverse();
  // Show only 2 initial points or all points
  const displayPoints = showAll ? reversedPoints : reversedPoints.slice(0, 2);
  // The present year is the first item in the reversed array
  const presentYear = reversedPoints[0].year;

  return (
    <section id="journey" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">My Journey</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Trying not to compare myself to others. Taking baby steps everyday.
        </p>
        
        <div className="relative max-w-4xl mx-auto pb-28">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline points */}
          {displayPoints.map((point, index) => {
            const isPresent = point.year === presentYear;
            return (
            <div key={index} className="relative mb-16 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Icon on timeline with glow effect for present */}
              <div className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                isPresent ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isPresent 
                    ? 'bg-primary/10 ring-2 ring-primary animate-pulse' 
                    : 'bg-secondary'
                }`}>
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>
              
              {/* Year indicator */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -top-12 px-3 py-1 rounded-md text-sm font-medium z-20 ${
                isPresent ? 'bg-primary text-primary-foreground' : 'bg-secondary/80 text-foreground'
              }`}>
                {point.year}
              </div>
              
              {/* Content */}
              <Card className={`w-5/12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} bg-card/80 backdrop-blur-sm shadow-md relative z-10`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          )})}
          
          {/* Show more/less button - positioned with more space from the timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 z-20 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
            {!showAll && reversedPoints.length > 2 && (
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => {
                  playSoundEffect("click");
                  setShowAll(true);
                }}
              >
                <span>Show Full Journey</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            )}
            
            {showAll && (
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => {
                  playSoundEffect("click");
                  setShowAll(false);
                }}
              >
                <span>Show Less</span>
                <ChevronDown className="h-4 w-4 rotate-180" />
              </Button>
            )}
          </div>
          
          {/* End point */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <div className="bg-secondary/80 rounded-full p-4">
              <Map className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
