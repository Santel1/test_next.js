import { Metadata } from "next";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Posts",
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="min-w-[320px] max-w-[1280px] mx-auto px-[20px] pb-[20px]">
      {children}
    </div>
  );
}
