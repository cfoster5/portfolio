"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../projects";
import { Item } from "./Item";
import { ProjectCard } from "./ProjectCard";

export const LayoutWrapper = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          handleClick={() => {
            setSelectedId(index);
            document
              .querySelector("html")
              ?.style.setProperty("overflow", "hidden");
          }}
        />
      ))}
      <AnimatePresence>
        {selectedId !== null && (
          <Item
            id={selectedId}
            handleClick={() => {
              setSelectedId(null);
              document.querySelector("html")?.style.removeProperty("overflow");
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
