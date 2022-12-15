"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../projects";

export const ProjectCard = ({
  project,
  handleClick,
}: {
  project: typeof projects[0];
  handleClick: () => void;
}) => {
  const id = projects.findIndex(({ name }) => name === project.name);
  return (
    <div
      className="flex w-full flex-col flex-nowrap gap-4"
      onClick={handleClick}
    >
      <motion.div
        // className="relative h-96 rounded-lg bg-blue-500 sm:w-80"
        className="relative h-[30rem] cursor-pointer overflow-hidden rounded-lg sm:w-auto"
        // className="relative aspect-[195/422] rounded-lg bg-blue-500"
        whileHover={{ scale: 1.025 }}
        layoutId={`card-container-${id}`}
      >
        {/* TODO: fix image peeking through at borders */}
        <Image
          src={project.img}
          alt=""
          fill
          className="rounded-lg object-cover object-top"
        />
        <div
          className="absolute block h-full w-full rounded-lg"
          style={{
            background: `linear-gradient(0deg, rgb(34, 35, 38) 9%, rgba(33, 34, 37, 0.89) 42%, rgba(34, 35, 38, 0) 156%)`,
          }}
        />
        {/*  */}
        <motion.div
          className="absolute bottom-0 p-4 pt-0"
          layoutId={`title-container-${id}`}
        >
          <p className="text-xl font-bold text-white">{project.name}</p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-zinc-300 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
