import Image from "next/image";
import React from "react";

export interface PostsItemProps {
  src: string;
  alt: string;
  title: string;
  content: string;
}

export default function PostsItem({
  src,
  alt,
  title,
  content,
}: PostsItemProps) {
  return (
    <li className="flex gap-[15px] p-4 border border-[#e5e5e5] rounded-lg items-center">
      <Image
        src={src}
        width={335}
        height={190}
        alt={alt}
        style={{
          width: "335px",
          height: "190px",
        }}
      />
      <div className="flex flex-col gap-[10px]">
        <p className="font-bold text-[36px] leading-tight tracking-tight text-[#262626] md:text-[20px]">
          {title}
        </p>
        <p className="font-medium text-[14px] leading-tight tracking-tight text-[#262626] md:text-[16px]">
          {content}
        </p>
      </div>
    </li>
  );
}
