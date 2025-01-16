import clsx from "clsx";
import Link from "next/link";
import React from "react";

export interface NavItemProps {
  id?: string;
  variant?: "nav" | "users";
  current?: boolean;
  pathname: string;
  children: React.ReactNode;
}

export default function NavItem({
  variant = "nav",
  current,
  pathname,
  children,
  id,
}: NavItemProps) {
  const variantStyles = {
    nav: "p-[15px_25px] text-center border border-[#757575] rounded-[30px] font-medium text-[14px] tracking-tight leading-[1.29] focus:border-[#f6b83d] hover:border-[#f6b83d]",
    users:
      "p-[15px] text-center text-nowrap border border-[#757575] rounded-[30px] font-medium text-[14px] tracking-tight leading-[1.29] focus:border-[#f6b83d] hover:border-[#f6b83d]",
  };

  return (
    <li key={id}>
      <Link
        href={pathname}
        className={clsx(
          variantStyles[variant],
          current && "border-[#f6b83d]",
          "flex transition-all"
        )}
      >
        {children}
      </Link>
    </li>
  );
}
