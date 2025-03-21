"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/temporary/AnimatedTooltip";

export const RaycastExtension = () => {
  const raycastItem = [
    {
      id: 1,
      name: "Try my extension!",
      designation: "P2P file share",
      image: "https://www.raycast.com/nazif_ishrak/sendme/install_button@2x.png?v=1.1",
      width: 256,
      height: 64,
      imageStyle: { 
        height: "164px",
        width: "256px",
        maxWidth: "100%"
      },
      className: "rounded-md hover:shadow-lg"
    },
  ];

  return (
    <div className="w-full .-mx-28 my-0 flex justify-center">
      <a 
        href="https://www.raycast.com/nazif_ishrak/sendme" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <AnimatedTooltip items={raycastItem} />
      </a>
    </div>
  );
};