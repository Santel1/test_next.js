"use client";

import React from "react";
import { usePathname } from "next/navigation";

import NavItem from "./nav-item";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={
        "max-w-[1280px] mx-auto flex justify-center items-center min-w-[320px] p-[20px_0px] mb-[50px]"
      }
    >
      <ul className="flex gap-[10px]">
        <NavItem pathname="/users" current={pathname === "/users"}>
          Users
        </NavItem>
        <NavItem pathname="/posts" current={pathname === "/posts"}>
          Posts
        </NavItem>
      </ul>
    </header>
  );
}
