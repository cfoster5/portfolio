import type { NextPage } from "next";
import Link from "next/link";
import { projects } from "../projects";
import { ProjectCard } from "./ProjectCard";
import { FolderGit, Github, Mail } from "lucide-react";

// const Popover = () => {
//   return (
//     <div className="fixed top-0 z-[1001] flex h-full w-full overflow-auto">
//       <div className="relative z-[100] m-auto w-max max-w-[600px]">
//         <div className="h-48 w-96 bg-red-500"></div>
//       </div>
//     </div>
//   );
// };

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

          <div className="max-w-6xl">
            <h2 className="mt-6 text-4xl font-bold">About Me</h2>
            <p className="mt-3">
              I&apos;m currently an API developer in the financial services
              industry. I previously led custom development in SharePoint using
              React and Angular. I love music, movies, shows, and games and
              often combine these interests with apps or sites I&apos;m working
              on in my free time.
            </p>
            <h2 className="mt-6 text-4xl font-bold">Projects</h2>
          </div>

          <div className="mt-3 flex flex-col flex-wrap gap-4 sm:flex-row">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h2 className="text-4xl font-bold">Contact</h2>
            <Link
              href="mailto:cfoster3204@gmail.com"
              className="flex items-center hover:underline"
            >
              <Mail />
              <span className="ml-2">cfoster3204@gmail.com</span>
            </Link>
            <Link
              href="https://github.com/cfoster5"
              className="flex items-center hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              <span className="ml-2">GitHub</span>
            </Link>
          </div>
        </main>

        <footer className="mt-auto flex h-8 w-full items-center justify-center border-t p-8">
          <Link
            className="flex items-center justify-center gap-2 hover:underline"
            href="https://github.com/cfoster5/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FolderGit />
            Powered by Next.js and Tailwind CSS
          </Link>
        </footer>
      </div>
      {/* <Popover /> */}
    </>
  );
};

export default Home;
