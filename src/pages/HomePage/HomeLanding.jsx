import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
        
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const iconVariant = {
    rest: {

        rotate: [0, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    hover: {
        rotate: 360,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.3, // 👈 ADD HERE
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    hover: {
        scale: 1.08,
    },
};


function HomeLanding() {
    return (
        <section
            className="herolanding grayscale brightness-100 hover:brightness-105 hover:grayscale-50 transition-all duration-1000 sticky top-0 z-0 h-screen w-full
        ">
            <section className="h-screen w-full flex flex-col justify-center items-start max-w-150 

        ">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-4 m-10 font-planeto"
                >
                    <motion.p
                        variants={item}
                        className="tracking-widest text-2xl text-neutral-200"
                    >SAGAR SEKHAR PANI</motion.p>

                    <motion.p
                        variants={item}
                        className="font-sans tracking-widest text-lg text-neutral-400"
                    >Frontend developer crafting interfaces that are felt, not just used.</motion.p>

                    <motion.a
                        variants={buttonVariant}
                        href="/Sagar_Sekhar_Pani.pdf"
                        download="Sagar_Sekhar_Pani_Resume.pdf"
                        initial="rest"
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                        animate="rest"
                        className="group flex justify-start items-center gap-2 mt-4 font-sans tracking-widest text-lg px-4 py-2 w-50 backdrop-blur-2xl bg-white/5 hover:bg-white/10  text-neutral-200 rounded-md border border-neutral-200/50 hover:border-neutral-200/700 transition-all duration-300 ease-out"
                    >
                        <span>Acquire Intel</span>
                        <motion.img
                            src="/icons/planet.svg"
                            alt="download icon"
                            className="w-5 h-5 group-hover:rotate-360"

                            variants={iconVariant}
                        />

                    </motion.a>
                </motion.div>
            </section>
        </section>


    )
}
export default HomeLanding;