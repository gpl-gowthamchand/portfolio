
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { 
  Home, 
  User,
  Briefcase, 
  Activity, 
  Map, 
  FolderKanban, 
  Mail, 
  Github, 
  Linkedin, 
  AtSign
} from "lucide-react";
import { playSoundEffect } from "./SoundEffects";
import { DialogTitle } from "@/components/ui/dialog";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  showNavigation?: boolean;
}

export default function CommandPalette({ open, setOpen, showNavigation = false }: CommandPaletteProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const links = [
    {
      group: "Navigation",
      items: [
        { name: "Home", icon: <Home className="mr-2 h-4 w-4" />, href: "/" },
        { name: "About", icon: <User className="mr-2 h-4 w-4" />, href: "/about" },
        { name: "Experience", icon: <Briefcase className="mr-2 h-4 w-4" />, href: "/experience" },
        { name: "Activity", icon: <Activity className="mr-2 h-4 w-4" />, href: "/activity" },
        { name: "Journey", icon: <Map className="mr-2 h-4 w-4" />, href: "/journey" },
        { name: "Projects", icon: <FolderKanban className="mr-2 h-4 w-4" />, href: "/projects" },
        { name: "Contact", icon: <Mail className="mr-2 h-4 w-4" />, href: "/contact" },
      ],
    },
    {
      group: "Social",
      items: [
        { name: "GitHub", icon: <Github className="mr-2 h-4 w-4" />, href: "https://github.com/gpl-gowthamchand", external: true },
        { name: "LinkedIn", icon: <Linkedin className="mr-2 h-4 w-4" />, href: "https://linkedin.com/in/gplgowthamchand", external: true },
        { name: "Email", icon: <AtSign className="mr-2 h-4 w-4" />, href: "mailto:gpl.gowthamchand@gmail.com" },
      ],
    },
  ];

  const handleSelect = (href: string) => {
    setOpen(false);
    playSoundEffect("command");
    
    setTimeout(() => {
      if (href.startsWith("http") || href.startsWith("mailto")) {
        window.open(href, "_blank");
      } else {
        navigate(href);
      }
    }, 200);
  };

  // Helper function to check if an item is active based on the current location
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname === href;
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Search and Navigation</DialogTitle>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {links.map((group) => (
          <CommandGroup key={group.group} heading={group.group}>
            {group.items.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => handleSelect(item.href)}
                className={`flex items-center ${isActive(item.href) ? 'bg-accent text-accent-foreground font-medium' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
                {isActive(item.href) && !item.external && (
                  <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-sm">
                    Current
                  </span>
                )}
                {item.external && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    Opens in new tab
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
