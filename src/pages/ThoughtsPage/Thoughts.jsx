import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { thoughts } from "../../data/thoughtsData";

/* ---------------- ITEM ---------------- */
function ThoughtItem({ post }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.3,
    once: false,
  });

  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (inView) setHasShown(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={hasShown ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border-l border-white/10 pl-8 md:pl-10"
    >
      {/* LEFT LINE */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10 group-hover:bg-white/30 transition" />

      {/* META */}
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 tracking-widest">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-600" />
        <span>{post.tag}</span>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-light group-hover:text-white transition">
        {post.title}
      </h2>

      {/* EXCERPT */}
      <p className="text-gray-400 mt-4 max-w-2xl group-hover:text-gray-300 transition">
        {post.excerpt}
      </p>

      {/* HOVER LINE */}
      <div className="mt-6 h-px w-0 bg-white/30 group-hover:w-32 transition-all duration-500" />
    </motion.div>
  );
}

/* ---------------- PAGE ---------------- */
export default function Thoughts() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-24 py-24">

      {/* HEADER */}
      <div className="mb-24">
        <h1 className="signRathi text-5xl md:text-7xl font-light tracking-tight">
          Thoughts <span className="text-gray-500">Archive</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          A quiet space for design reflection and evolving craft.
        </p>
      </div>

      {/* FEED */}
      <div className="space-y-20">
        {thoughts.map((post) => (
          <ThoughtItem key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
}