import { motion } from 'framer-motion';

function HomeBody() {
  return (
    <section className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 pt-20 relative overflow-hidden">

      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 via-transparent to-blue-600/20 blur-3xl opacity-40 pointer-events-none" />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center'>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl"
        >
          <img 
            src="/astronaut.jpg" 
            alt="Astronaut" 
            className='w-full h-auto object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out'
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-2xl w-full z-10 flex flex-col items-start"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Heading */}
          <motion.h1
            className="flex text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ME
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="w-20 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          {/* Content */}
          <motion.p
            className="text-gray-300 leading-relaxed text-base md:text-lg space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="block">
              I’m a frontend developer who doesn’t just build interfaces; I build
              experiences that feel intuitive, responsive, and alive.
            </span>

            <span className="block">
              For me, development is not about assembling components; it’s about
              understanding people; how they think, how they interact, and how
              technology can quietly solve problems without getting in their way.
            </span>

            <span className="block">
              I work primarily with React and modern web technologies, but what
              truly drives me is the process of turning ideas into something
              tangible; something that others can use, feel, and rely on.
            </span>

            <span className="block">
              My approach is simple but intentional: I don’t rush to “make it
              work.” I take time to break problems down, design structure first,
              and build with clarity.
            </span>

            <span className="block">
              I believe good frontend development is where logic meets empathy;
              where clean architecture supports meaningful interaction.
            </span>
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}

export default HomeBody;