import { type ReactNode, useRef, useEffect, useState } from "react";

interface SectionSkeletonProps {
  lines?: number;
  children?: ReactNode;
}

export default function SectionSkeleton({ lines = 3, children }: SectionSkeletonProps) {
  if (children) {
    return <>{children}</>;
  }

  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-white/5 rounded w-1/4" />
      <div className="h-6 bg-white/5 rounded w-1/2" />
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 bg-white/5 rounded w-full" />
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="h-32 bg-white/5 rounded-xl" />
        <div className="h-32 bg-white/5 rounded-xl" />
      </div>
    </div>
  );
}
