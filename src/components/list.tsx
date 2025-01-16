import clsx from "clsx";
import React from "react";

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export default function List({ children, className }: ListProps) {
  return <ul className={clsx("flex", className)}>{children}</ul>;
}
