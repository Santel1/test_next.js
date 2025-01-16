import React from "react";
import { Metadata } from "next";
import { getUsersById } from "@/src/lib/api";

export interface LayoutProps {
  children: React.ReactNode;
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
