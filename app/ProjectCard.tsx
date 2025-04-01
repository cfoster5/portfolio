import Image from "next/image";
import { projects } from "../projects";

export const ProjectCard = ({
  project,
}: {
  project: (typeof projects)[number];
}) => (
  <div className="relative h-[30rem] cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105 sm:aspect-[9/16] sm:w-auto">
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
    <div className="absolute bottom-0 p-4 pt-0">
      <h3 className="text-xl font-bold text-white">{project.name}</h3>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span key={tag} className="text-sm text-zinc-300 dark:text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
