import { motion } from "framer-motion";
import Link from "next/link";
import { RiExternalLinkLine, RiGitRepositoryLine } from "react-icons/ri";
import { projects } from "../projects";
import { Overlay } from "./Overlay";

export const Item = ({
  id,
  handleClick,
}: {
  id: number;
  handleClick: () => void;
}) => {
  const { description, name, tags, img, link } = projects[id];

  return (
    <>
      <Overlay handleClick={handleClick} />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[1] block h-full w-full overflow-hidden py-10">
        <motion.div
          className="pointer-events-none relative mx-auto h-auto w-full max-w-3xl overflow-hidden rounded-lg bg-[#1c1c1e]"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            // className="absolute top-0 left-0 z-[1] h-96 w-screen overflow-hidden"
            className="absolute top-0 left-0 z-[1] h-96 w-screen overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            {/* <img className="card-image" src={img} alt="" /> */}
            {/* <Image
              src={img}
              alt=""
              fill
              // className="object-cover object-top"
              className="object-scale-down object-top"
            /> */}
          </motion.div>
          {/* <motion.div
            className="absolute top-8 left-8 z-[1] max-w-xs"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{tags[0]}</span>
            <h2>{name}</h2>
          </motion.div> */}
          <motion.div
            // className="absolute top-0 pt-4 pl-4"
            className="absolute top-0 pl-4 pt-4"
            layoutId={`title-container-${id}`}
          >
            <p className="text-xl font-bold text-white">{name}</p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-zinc-300 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div className="w-[90vw] max-w-3xl p-4 pt-96" animate>
            <div className="flex gap-6">
              {link && (
                <Link
                  className="flex items-center gap-2 hover:underline"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiExternalLinkLine />
                  Demo
                </Link>
              )}
              <Link
                className="flex items-center gap-2 hover:underline"
                href="https://github.com/cfoster5/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <RiGitRepositoryLine />
                Source
              </Link>
            </div>
            <p className="pt-2">{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
