import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";




export default function Projects() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-16 py-24">

      <div className="mb-20">
        <h1 className="signRathi text-5xl md:text-7xl font-light tracking-tight">
          Selected <span className="text-gray-400">Projects</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          These projects are part of my journey as a developer; I hope they reflect my learning, growth, and the intention behind every line of code.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}