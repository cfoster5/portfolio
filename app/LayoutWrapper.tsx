"use client";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { projects } from "../projects";
import { Item } from "./Item";
import { ProjectCard } from "./ProjectCard";

export const LayoutWrapper = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <AnimateSharedLayout>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          handleClick={() => setSelectedId(index)}
        />
      ))}
      <AnimatePresence>
        {selectedId !== null && (
          <Item
            id={selectedId}
            key="item"
            handleClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
