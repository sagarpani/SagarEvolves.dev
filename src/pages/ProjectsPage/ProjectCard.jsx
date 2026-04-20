import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router";

const cardVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasShown(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={hasShown ? "show" : "hidden"}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 group">
        <div className="absolute -inset-6 bg-white/5 blur-3xl opacity-20" />

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-105 object-cover rounded-2xl transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-light">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 border border-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            to={project.liveLink}
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black"
          >
            Explore
          </Link>

          <Link
            to={project.github}
            target="_blank"
            className="px-6 py-3 rounded-full border border-white/20"
          >
            Github
          </Link>
        </div>
      </div>
    </motion.div>
  );
}