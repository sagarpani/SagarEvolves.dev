function HeroLanding() {
    return (
        <section
        className="herolanding sticky top-0 z-0 h-screen w-full
        ">
            <section className="h-screen w-full flex flex-col justify-center items-start max-w-150 

        ">
            <div className="flex flex-col gap-4 m-10  font-planeto">
                <p className="tracking-widest text-2xl text-neutral-200 ">SAGAR SEKHAR PANI</p>

                <p className="font-sans tracking-widest text-lg text-neutral-400">Frontend developer turning ideas into thoughtful, interactive experiences...</p>

                <a
                    href="/Sagar_Sekhar_Pani.pdf"
                    download="Sagar_Sekhar_Pani_Resume.pdf"
                    className="flex justify-start align-center gap-2 mt-2 font-sans tracking-widest text-lg px-4 py-2 w-50 backdrop-blur-2xl bg-transparent text-neutral-300 rounded-md hover:scale-105 active:scale-95  transition-transform duration-300 border border-neutral-200/50"
                >
                    <span>Acquire Intel</span>
                    <img src="/icons/planet.svg" alt="download icon" />
                
                </a>
            </div>
        </section>
        </section>
        
        
    )
}
export default HeroLanding;