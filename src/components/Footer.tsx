
import React from "react";

export default function Footer() {
  return (
    <footer className="py-2 px-4 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GPLGC. All rights reserved.
          </p>
        </div>
        <div className="text-xs text-muted-foreground">
          <p>Designed & Built with 💜</p>
        </div>
      </div>
    </footer>
  );
}
