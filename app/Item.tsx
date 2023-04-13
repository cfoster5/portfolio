import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
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
  const { description, name, tags, img, link, repo } = projects[id];
  const y = useMotionValue(0);

  function checkSwipeToDismiss() {
    y.get() > 150 && handleClick();
    console.log(y.get());
  }

  return (
    <>
      <Overlay handleClick={handleClick} />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[1] block h-full w-full overflow-hidden sm:py-10"
        hidden
      >
        <motion.div
          className="pointer-events-none relative mx-auto h-auto w-full max-w-3xl overflow-hidden rounded-lg bg-white dark:bg-zinc-900"
          layoutId={`card-container-${id}`}
          // drag="y"
          // dragConstraints={{ top: 0, bottom: 0 }}
          // onDrag={checkSwipeToDismiss}
          // style={{ y }}
        >
          <motion.div
            className="absolute top-0 left-0 z-[1] h-96 w-screen overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            {/* <img className="card-image" src={img} alt="" /> */}
            {/* <Image
              src="/mcu_ratings_device.png"
              alt=""
              fill
              // className="object-cover object-top"
              className="object-scale-down object-top"
            /> */}
          </motion.div>
          <motion.div
            className="absolute top-0 pl-4 pt-4"
            layoutId={`title-container-${id}`}
          >
            <p className="text-xl font-bold text-zinc-900 dark:text-white">
              {name}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="pointer-events-auto w-[90vw] max-w-3xl p-4 pt-96"
            animate
          >
            <div className="flex gap-6">
              {link && (
                <Link
                  className="flex items-center gap-2 text-zinc-900 hover:underline dark:text-white"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiExternalLinkLine />
                  Demo
                </Link>
              )}
              {repo && (
                <Link
                  className="flex items-center gap-2 text-zinc-900 hover:underline dark:text-white"
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGitRepositoryLine />
                  Source
                </Link>
              )}
            </div>
            <p className="pt-2 text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
