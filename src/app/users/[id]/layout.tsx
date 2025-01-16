import { getUsersById } from "@/src/lib/api";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const user = await getUsersById(id);

  return {
    title: `${user.firstname} ${user.lastname} - Profile`,
    description: `The profile of ${user.firstname} ${user.lastname}. Contact them via email: ${user.email}.`,
  };
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="min-w-[320px] max-w-[1280px] mx-auto px-[20px] pb-[20px] ">
      {children}
    </div>
  );
}
