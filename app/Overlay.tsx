import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Overlay = ({ handleClick }: { handleClick: () => void }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
    transition={{ duration: 0.2, delay: 0.1 }}
    className="pointer-events-auto fixed inset-y-0 left-1/2 z-[1] w-full translate-x-[-50%] bg-black/80"
    onClick={handleClick}
  />
);
