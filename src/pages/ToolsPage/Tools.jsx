import { motion } from "framer-motion";
import { tools } from "../../data/toolsData";

const item = {
  hidden: (i = 0) => ({
    opacity: 0,
    x: -40,
  }),

  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Tools() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-24">

      {/* Header */}
      <div className="mb-20">
        <h1 className="signRathi text-5xl md:text-7xl font-light tracking-tight">
          Tools of <span className="text-gray-400">Craft</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          The technologies that help me bring my designs to life.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">

        {tools.map((section, sectionIndex) => (
          <div key={sectionIndex}>

            {/* Category */}
            <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-6">
              {section.category}
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

              {section.items.map((tool, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  className="relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500 overflow-hidden group"
                >

                  {/* Glow */}
                  <div className="absolute -inset-1 bg-linear-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

                  {/* Content */}
                  <h3 className="text-lg font-light">{tool.name}</h3>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {tool.desc}
                  </p>

                  {/* sliding line */}
                  <div className="mt-4 h-px w-full bg-white/10 relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-0 bg-white/40 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}