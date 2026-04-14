import { Link, NavLink } from "react-router";

function Footer() {
  return (
    <footer className="relative w-full mt-24 overflow-hidden border-t border-white/10 bg-black">

      
      <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black opacity-90" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Identity */}
          <section aria-label="About developer">
            <h2 className="text-white text-xl tracking-[0.3em] font-light">
              SAGAR SEKHAR PANI
            </h2>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Frontend Developer focused on crafting clean, interactive, and thoughtful digital experiences.
            </p>

            <p className="mt-6 text-xs text-neutral-600">
              Available for freelance & opportunities
            </p>
          </section>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white text-sm tracking-widest mb-4">
              NAVIGATION
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-neutral-400">
              {["Home", "Projects", "Experience", "Tools", "Thoughts"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="
                      relative inline-block
                      transition-all duration-200
                      hover:text-white
                      after:content-['']
                      after:absolute after:left-0 after:-bottom-1
                      after:w-0 after:h-px
                      after:bg-white/70
                      hover:after:w-full
                      after:transition-all
                    "
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-white text-sm tracking-widest mb-4">
              CONTACT
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-neutral-400">
              <li>
                <Link to="https://mail.google.com/mail/u/0/?fs=1&to=sagarpani22@gmail.com&tf=cm" className="hover:text-white transition">
                  sagarpani22@gmail.com
                </Link>
              </li>

              <li>
                <Link to="https://github.com/sagarpani" className="hover:text-white transition">
                  GitHub
                </Link>
              </li>

              <li>
                <Link to="https://www.linkedin.com/in/sagarpani/" className="hover:text-white transition">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </address>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-neutral-600">
          <p>© 2026 Sagar Sekhar Pani</p>
          <p className="tracking-widest">BUILT WITH REACT + TAILWIND</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;