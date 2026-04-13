

function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-start max-w-150 ">
            <div className="flex flex-col gap-4 m-10  font-planeto">
                <p className="tracking-widest text-2xl text-neutral-200 ">SAGAR SEKHAR PANI</p>

                <p className="font-sans tracking-widest text-lg text-neutral-500">Frontend developer turning ideas into thoughtful, interactive experiences...</p>



                <a
                    href="/Sagar_Sekhar_Pani.pdf"
                    download="Sagar_Sekhar_Pani.pdf"
                    className="flex justify-start align-center gap-4 font-sans tracking-widest text-lg px-4 py-2 w-60 backdrop-blur-2xl bg-transparent text-neutral-200 rounded-md hover:opacity-80 border border-neutral-200/30"
                >
                    <span>Acquire Intel</span>
                    <img src="/icons/planet.svg" alt="download icon" />
                
                </a>
            </div>
        </section>
    )
}
export default Hero;