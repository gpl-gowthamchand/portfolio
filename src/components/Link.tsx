import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Link({ href, className, children, ...props }: LinkProps) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
