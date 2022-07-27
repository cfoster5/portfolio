import { motion, useMotionValue, useTransform } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { projects } from "../projects";

const Popover = () => {
  return (
    <div className="fixed top-0 z-[1001] flex h-full w-full overflow-auto">
      <div className="relative z-[100] m-auto w-max max-w-[600px]">
        <div className="h-48 w-96 bg-red-500"></div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  // const [angle, setAngle] = useState(8);
  // const [perspective, setPerspective] = useState(500);
  // const y = useMotionValue(0.5);
  // const x = useMotionValue(0.5);

  // const rotateY = useTransform(x, [0, 1], [-angle, angle], {
  //   clamp: true,
  // });
  // const rotateX = useTransform(y, [0, 1], [angle, -angle], {
  //   clamp: true,
  // });

  // function onMove(e) {
  //   // get position information for the card
  //   const bounds = e.currentTarget.getBoundingClientRect();

  //   // set x,y local coordinates
  //   const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
  //   const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

  //   // update MotionValues
  //   x.set(xValue, true);
  //   y.set(yValue, true);
  // }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-900 dark:text-white">
        {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}
        <Head>
          <title>Corey Foster | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Corey Foster | Portfolio" />
          <meta
            name="description"
            content="A web and app developer based in Evansville, IN"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Corey Foster | Portfolio" />
          <meta
            property="og:description"
            content="A web and app developer based in Evansville, IN"
          />
          <meta property="og:image" content="/site.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Corey Foster | Portfolio" />
          <meta
            property="twitter:description"
            content="A web and app developer based in Evansville, IN"
          />
          <meta property="twitter:image" content="/site.png" />
        </Head>

        <main className="p-8 sm:p-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-500">Corey</span>.
            </h1>
            <p className="mt-3 text-2xl">
              A web and app developer based in Evansville, IN
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="mt-6 text-4xl font-bold">About Me</h2>
            <p className="mt-3">
              I&apos;m currently an Application Analyst in the financial
              services industry, specializing in SharePoint and API development.
              I lead custom development in SharePoint using React and Angular.
            </p>
            <p>
              I love movies, shows, and games and often combine these interests
              with apps or sites I&apos;m working on in my free time.
            </p>
            <h2 className="mt-6 text-4xl font-bold">Projects</h2>
          </div>

          <div className="mt-3 block gap-4 space-y-4 sm:flex sm:space-y-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex w-full flex-col flex-nowrap gap-4"
              >
                <motion.div
                  // className="relative h-96 rounded-lg bg-blue-500 sm:w-80"
                  className="relative h-[30rem] cursor-pointer overflow-hidden sm:w-auto"
                  // className="relative aspect-[195/422] rounded-lg bg-blue-500"
                  whileHover={{ scale: 1.025 }}
                >
                  <Image
                    src={project.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="rounded-lg"
                  />
                  <div
                    className="absolute block h-full w-full rounded-lg"
                    style={{
                      background: `linear-gradient(0deg, rgb(34, 35, 38) 9%, rgba(33, 34, 37, 0.89) 42%, rgba(34, 35, 38, 0) 156%)`,
                    }}
                  />
                  <div className="absolute bottom-0 p-4 pt-0">
                    <p className="text-xl font-bold text-white">
                      {project.name}
                    </p>
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
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl">
            <h2 className="mt-6 text-4xl font-bold">Contact</h2>
            <div className="mt-3 flex">
              {/* <Image
              src="/paper-plane.svg"
              alt="paper-plane"
              width={16}
              height={16}
            /> */}
              <a
                href="mailto:cfoster3204@gmail.com"
                className="flex items-center hover:underline"
              >
                <FaPaperPlane />
                <span className="ml-2">cfoster3204@gmail.com</span>
              </a>
            </div>
            <div className="mt-3 flex">
              {/* <Image
              src="/paper-plane.svg"
              alt="paper-plane"
              width={16}
              height={16}
            /> */}
              <a
                href="https://github.com/cfoster5"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </div>
        </main>

        <footer className="flex h-8 w-full items-center justify-center border-t p-8">
          <a
            className="flex items-center justify-center gap-2 hover:underline"
            href="https://github.com/cfoster5/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <RiGitRepositoryLine />
            Powered by Next.js and Tailwind CSS
          </a>
        </footer>
      </div>
      {/* <Popover /> */}
    </>
  );
};

export default Home;
