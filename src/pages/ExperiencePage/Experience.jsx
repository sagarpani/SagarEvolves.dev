import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { experience } from "../../data/experienceData";

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  // lock animation after first scroll-down entry
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasShown(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={hasShown ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08, // stagger effect
      }}
      className={`relative flex flex-col md:flex-row items-start gap-10 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

      {/* Card */}
      <div className="md:w-1/2 ml-10 md:ml-0">
        <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/2 backdrop-blur-md hover:-translate-y-1 hover:border-white/20 transition duration-500">

          <h2 className="text-2xl md:text-3xl font-light">
            {exp.role}
          </h2>

          <p className="text-gray-400 mt-2">
            {exp.company} • {exp.location}
          </p>

          <p className="text-xs text-gray-500 mt-1 tracking-widest">
            {exp.period}
          </p>

          <p className="text-gray-300 mt-6 leading-relaxed">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {exp.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 border border-white/10 rounded-full text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-20 py-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <h1 className="signRathi text-5xl md:text-7xl font-light tracking-tight">
          Work <span className="text-gray-400">Timeline</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          This journey has been shaped through meaningful collaborations across teams and organizations, helping refine both skill and perspective as a software developer. Forever grateful for the experiences along the way.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">

        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-24">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}