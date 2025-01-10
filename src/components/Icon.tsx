"use client";

import React from "react";

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

/**
 * 아이콘 컴포넌트
 * @param name  icones 에서 찾은 아이콘의 이름
 * @param size 아이콘 사이즈(px)
 * @param className 아이콘 클래스
 * @see https://icones.js.org/collection/all
 */
export default function Icon({ name, size = 24, className = "" }: IconProps) {
  const maskStyle = {
    display: "inline-block",
    backgroundColor: "currentColor",
    "--svg": `url('https://api.iconify.design/${name}.svg')`,
    WebkitMaskImage: "var(--svg)",
    maskImage: "var(--svg)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    width: `${size}px`,
    height: `${size}px`,
  };

  const src = encodeURI(`https://api.iconify.design/${name}.svg`);

  if (src) {
    return <span style={maskStyle} className={className}></span>;
  }
}
