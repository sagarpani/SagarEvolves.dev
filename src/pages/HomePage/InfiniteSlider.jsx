import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};


const techStack = [
  { name: "React", icon: "/toolIcons/react.svg" },
  { name: "JavaScript", icon: "/toolIcons/js.svg" },
  { name: "Tailwind", icon: "/toolIcons/tailwind.svg" },
  { name: "Framer Motion", icon: "/toolIcons/framer1.svg" },
  { name: "Redux", icon: "/toolIcons/redux.png" },
  { name: "Git", icon: "/toolIcons/git.svg" },
  { name: "Python", icon: "/toolIcons/python.svg" },
  { name: "HTML", icon: "/toolIcons/html.svg" },
  { name: "CSS", icon: "/toolIcons/css.svg" },
];

function InfiniteSlider() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const heading = ["Tech", "Arsenal"];

  return (
    <div className="relative mt-24 mb-24 overflow-hidden text-white">

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-96 h-40 bg-transparent rounded-full" />
      </div>

      {/* Heading word stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14 relative z-20"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight flex flex-wrap justify-center gap-3">
          {heading.map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={
                w === "Arsenal"
                  ? "bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  : "text-white"
              }
            >
              {w}
            </motion.span>
          ))}
        </h2>

        <motion.p
          variants={fadeUp}
          className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg"
        >
          A curated set of tools I use to build fast, scalable, and interactive UIs.
        </motion.p>
      </motion.div>

      {/* slider */}
      <motion.div
        ref={containerRef}
        className="flex w-max gap-10 relative z-0"
        animate={{
          x: width ? [0, -width] : 0,
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, y: -6 }}
            className="group relative flex items-center gap-4 px-8 py-4 
                       rounded-2xl border border-white/10 
                       bg-white/5 backdrop-blur-xl 
                       whitespace-nowrap overflow-hidden"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-blue-500/10 to-purple-500/10" />

            {/* icon */}
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
            />

            {/* text */}
            <span className="text-neutral-300 group-hover:text-white transition">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;

