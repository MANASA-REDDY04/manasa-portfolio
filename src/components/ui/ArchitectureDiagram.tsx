"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

interface ArchitectureDiagramProps {
  chart: string;
}

export function ArchitectureDiagram({ chart }: ArchitectureDiagramProps) {
  const { resolvedTheme } = useTheme();
  const [svgContent, setSvgContent] = React.useState<string>("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: resolvedTheme === "dark" ? "dark" : "default",
      securityLevel: "loose",
    });

    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgContent(svg);
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };

    renderDiagram();
  }, [chart, resolvedTheme]);

  return (
    <div className="w-full overflow-x-auto py-8 flex justify-center bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} className="flex justify-center min-w-full md:min-w-0" />
      ) : (
        <div className="animate-pulse flex space-x-4">
          <div className="h-32 w-full bg-white/5 rounded"></div>
        </div>
      )}
    </div>
  );
}
