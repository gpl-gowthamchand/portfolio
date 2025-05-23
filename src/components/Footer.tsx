import React from "react";
import { currentDayName } from "@/lib/utils/dateUtils";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="py-2 px-4 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center mt-10">
        {/* Desktop */}
        <div className="mb-2 hidden text-sm text-muted-foreground md:flex">
          <div className="mx-1">
            <Link
              href="./"
              className="px-3 py-2 text-sm font-medium border-primary/30 bg-secondary/30 link-underline link-hover transition-all duration-300 shadow-sm transform hover:scale-105 hover:border-primary hover:bg-primary/10 cursor-pointer"
            >
              GPL Gowtham chand{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link
              href="https://qod.shakiltech.com/"
              className="px-3 py-2 text-sm font-medium border-primary/30 bg-secondary/30 link-underline link-hover transition-all duration-300 shadow-sm transform hover:scale-105 hover:border-primary hover:bg-primary/10 cursor-pointer"
            >
              Have a good {currentDayName()}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium border-primary/30 bg-secondary/30 link-underline link-hover transition-all duration-300 shadow-sm transform hover:scale-105 hover:border-primary hover:bg-primary/10 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="mb-2 text-sm text-muted-foreground sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link
              href="./"
              className="px-3 py-2 text-sm font-medium border-primary/30 bg-secondary/30 link-underline link-hover transition-all duration-300 shadow-sm transform hover:scale-105 hover:border-primary hover:bg-primary/10 cursor-pointer"
            >
              GPLGC{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
