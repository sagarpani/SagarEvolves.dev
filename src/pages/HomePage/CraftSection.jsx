import { motion } from "framer-motion";
import InfiniteSlider from "./InfiniteSlider";

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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
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

const cardVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const iconVariants = {
  rest: {
    scale: 1,
    y: 0,
    filter: "grayscale(100%)",
    opacity: 1
  },
  hover: {
    scale: 1.2,
    y: 2,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};
const textVariants = {
  rest: {
    y: 0,
    opacity: 0.7,
  },
  hover: {
    y: -2,
    opacity: 1,
  },
};

export default function CraftSection() {
  const heading = ["I", "don’t", "just", "build", "UI.", "I", "craft experiences."];

  return (
    <section className="relative w-full pb-32 pt-5 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-bl from-blue-600/20 via-transparent to-purple-600/10 blur-3xl opacity-40 pointer-events-none" />

      <InfiniteSlider />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Hero Typography */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight flex flex-wrap justify-center gap-3">
            {heading.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`
                  ${w === "craft experiences."
                    ? "bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    : "text-white"}
                `}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg"
          >
            A philosophy focused on clarity, interaction, and meaningful design.
          </motion.p>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Performance-first",
              desc: "Fast, fluid, and responsive at every interaction.",
              icon: "/icons/fire.png",
            },
            {
              title: "Intentional details",
              desc: "Every action has purpose.",
              icon: "/icons/intentions.png",
            },
            {
              title: "Scalable systems",
              desc: "Built to grow, not break.",
              icon: "/icons/scalability.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="group relative p-px rounded-2xl bg-linear-to-br from-white/10 to-white/5"
            >
              {/* gradient border wrapper */}
              <div className="flex flex-col items-center relative h-full w-full rounded-2xl bg-black/90 backdrop-blur-xl p-6 overflow-hidden">

                {/* hover glow */}
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className=" absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.18),transparent_60%)]"
                />

                {/* Edge Light */}
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className=" absolute inset-0 opacity-0 bg-[linear-gradient(135deg,rgba(255,140,0,0.25),transparent,rgba(255,140,0,0.1))] "
                />

                {/* icon */}
                <motion.div
                  className="text-3xl mb-4 relative z-10"

                >
                  <motion.img
                    className=" relative z-50"
                    src={item.icon}
                    alt="icon"
                    width={40}
                    variants={iconVariants}

                  />
                </motion.div>

                {/* title */}
                <motion.h3 variants={textVariants} className="text-lg font-semibold relative z-10">
                  {item.title}
                </motion.h3>

                {/* description */}
                <motion.p variants={textVariants} className="text-sm text-neutral-400 mt-2 relative z-10 leading-relaxed">
                  {item.desc}
                </motion.p>

                {/* subtle bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r from-orange-400 to-amber-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-2xl overflow-hidden border border-white/10 group"
        >
          <picture>
            {/* mobile */}
            <source media="(max-width: 768px)" srcSet="/illustration_mobile.jpg" />

            {/* desktop fallback */}
            <img
              src="/illustration1.jpg"
              className="w-full h-105 object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
              alt="illustration"
            />
          </picture>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mt-20"
        >
          <div className="text-2xl md:text-4xl font-semibold flex flex-wrap justify-center gap-2">
            {["What", "we", "build", "becomes", "the", "trace", "of", "how we once felt."].map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`
                  ${w === "how we once felt."
                    ? "bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
                    : ""}
                `}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}