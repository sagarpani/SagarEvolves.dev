import { Link, NavLink } from "react-router";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-black">

      {/* background layers */}
      <div className="absolute inset-0 pointer-events-none">

        {/* top glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-100 
        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_60%)] 
        blur-3xl opacity-60" />

        {/* warm glow */}
        <div className="absolute bottom-0 right-0 w-100 h-62 
        bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.06),transparent_70%)] 
        blur-3xl opacity-40" />

        {/* fog */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/95 to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">

        {/* GRID FIXED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">

          {/* identity */}
          <section className="flex justify-start md:justify-center items-center max-w-xs " >
            <div className="flex flex-col max-w-xs">
              <h2 className="signRathi rotate-1 text-white/90 text-3xl tracking-[0.3em] font-medium">
                Sagar Sekhar Pani
              </h2>

              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                Frontend Developer focused on crafting clean, interactive, and thoughtful digital experiences.
              </p>

              <p className="mt-6 text-xs text-neutral-600 tracking-wide">
                Available for freelance & opportunities
              </p>
            </div>
          </section>



          {/* navigation */}
          <nav className="flex justify-start md:justify-center items-center max-w-xs">

            <div className="flex flex-col ">
              <h3 className="text-white/80 text-xs tracking-[0.3em] font-medium mb-4">
                NAVIGATION
              </h3>

              <ul className="flex flex-col gap-3 text-sm">
                {["Home", "Projects", "Experience", "Tools", "Thoughts"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="relative inline-block text-neutral-400 hover:text-white transition duration-300
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-0 after:bg-linear-to-r after:from-blue-400 after:to-purple-500
                    hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

          </nav>

          {/* contact */}
          <address className="not-italic flex justify-start md:justify-center items-center max-w-xs">
            <div className="flex flex-col ">
              <h3 className="text-white/80 text-xs tracking-[0.3em] font-medium mb-4">
                CONTACT
              </h3>

              <ul className="flex flex-col gap-3 text-sm text-neutral-400">

                <li>
                  <Link
                    to={"mailto:sagarpani22@gmail.com"}
                    className="flex items-center gap-3 hover:text-white transition duration-300"
                  >
                    <img src="/footer_icons/envelop.svg" alt="" className="w-4 h-4 opacity-80" />
                    <span className="leading-none">Email</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"https://github.com/sagarpani"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition duration-300"
                  >
                    <img src="/footer_icons/github.svg" alt="" className="w-4 h-4 opacity-80" />
                    <span className="leading-none">GitHub</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={"https://linkedin.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white transition duration-300"
                  >
                    <img src="/footer_icons/linkedin.svg" alt="" className="w-4 h-4 opacity-80" />
                    <span className="leading-none">LinkedIn</span>
                  </Link>
                </li>

              </ul>
            </div>

          </address>
        </div>

        {/* divider */}
        <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-600 tracking-widest">

          <p className="hover:text-neutral-400 transition">
            © 2026 Sagar Sekhar Pani
          </p>

          <p className="opacity-70 text-[10px] md:text-xs">
            BUILT WITH REACT + TAILWIND
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;