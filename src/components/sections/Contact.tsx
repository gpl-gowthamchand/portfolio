import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/lib/data";
import { AtSign, Github, Linkedin, Copy, Check, Mail } from "lucide-react";
import { playSoundEffect } from "../SoundEffects";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [mailAnim, setMailAnim] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    playSoundEffect("click");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleMailClick = () => {
    setMailAnim(true);
    playSoundEffect("click");
    window.open(`mailto:${contact.email}`, "_blank");
    setTimeout(() => setMailAnim(false), 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="title-gradient">Get In Touch</span>
        </h2>
        
        <Card className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm border border-border/50">
          <CardContent className="pt-6 px-6">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
            
            <div className="grid gap-6 mt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="w-full relative flex items-center gap-3 p-6 h-auto justify-start text-left bg-card hover:bg-card"
                  style={{ cursor: "default" }} // Prevent pointer cursor on button
                >
                  <div className="p-3 rounded-full bg-secondary/50">
                    <AtSign className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">{contact.email}</p>
                  </div>
                  {/* Icons container with gap */}
                  <span className="flex items-center gap-6 ml-2">
                    <span
                      className={`transition-transform duration-300${
                        mailAnim ? " animate-bounce" : " group-hover:scale-125"
                      } cursor-pointer`}
                      onClick={e => {
                        e.stopPropagation();
                        handleMailClick();
                      }}
                      title="Send Email"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={e => {
                        e.stopPropagation();
                        copyToClipboard(contact.email);
                        playSoundEffect("click");
                      }}
                      title="Copy Email"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500 animate-fade-in" />
                      ) : (
                        <Copy className="h-5 w-5 opacity-50" />
                      )}
                    </span>
                  </span>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Button
                    variant="outline"
                    className="w-full relative flex items-center gap-3 p-6 h-auto justify-start text-left bg-card hover:bg-card"
                    onClick={() => {
                      window.open(contact.github, "_blank");
                      playSoundEffect("click");
                    }}
                  >
                    <div className="p-3 rounded-full bg-secondary/50">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold">GitHub</p>
                  </Button>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Button
                    variant="outline"
                    className="w-full relative flex items-center gap-3 p-6 h-auto justify-start text-left bg-card hover:bg-card"
                    onClick={() => {
                      window.open(contact.linkedin, "_blank");
                      playSoundEffect("click");
                    }}
                  >
                    <div className="p-3 rounded-full bg-secondary/50">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold">LinkedIn</p>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
