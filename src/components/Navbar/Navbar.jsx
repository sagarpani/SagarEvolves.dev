import { NavLink } from 'react-router'

import {homeIcon, projectsIcon, experianceIcon, toolsIcon, thoughtsIcon} from '../../assets/images'
// import { useEffect, useState } from "react";

function Navbar(){
    // const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

    const iconStyle ="h-5 hover:scale-125 transition-transform duration-300 active:scale-100"
    const iconTooltipStyle = "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm  rounded-lg px-3 py-[3px] opacity-0 transition-all duration-500 ease-in-out group-hover:top-full group-hover:translate-y-5 group-hover:opacity-100"

    return(
        <div className="fixed z-100 top-0 left-0 right-0 flex items-center justify-center">
            {/* Navbar */}
            <nav className={`flex items-center justify-between border border-neutral-400  gap-9 mt-8 px-6 py-2  rounded-2xl  
            md:bg-linear-to-r md:from-black md:via-neutral-950 md:to-neutral-900
            `}>

                {/* Icons */}

                {/* Home */}
                <NavLink to="/"
                className = {({isActive}) => 
                    `relative group inline-block py-2 px-1 ${isActive ? 'border-t border-red-700 rounded-2xl' : ''}`
                }
                >                    
                    <img className={iconStyle} src={homeIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Home</div>
                </NavLink>

                {/* Projects */}
                <NavLink to="/projects"
                className = {({isActive}) => 
                    `relative group inline-block py-2 px-1 ${isActive ? 'border-t border-red-700 rounded-2xl' : ''}`
                }
                >
                    <img className={iconStyle} src={projectsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Projects</div>
                </NavLink>

                {/* Experiance */}
                <NavLink to = "/experiance"
                className = {({isActive}) => 
                    `relative group inline-block py-2 px-1 ${isActive ? 'border-t border-red-700 rounded-2xl ' : ''}`
                }
                >
                    <img className={iconStyle} src={experianceIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Experiance</div>
                </NavLink>

                {/* Tools */}
                <NavLink to = "/tools"
                className = {({isActive}) => 
                    `relative group inline-block py-2 px-1 ${isActive ? 'border-t border-red-700 rounded-2xl ' : ''}`
                }
                >
                    <img className={iconStyle} src={toolsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Tools</div>
                </NavLink>

                {/* Thoughts */}
                <NavLink to = "/thoughts"
                className = {({isActive}) => 
                    `relative group inline-block py-2 px-1 ${isActive ? 'border-t border-red-700 rounded-2xl' : ''}`
                }
                >
                    <img className={iconStyle} src={thoughtsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Thoughts</div>
                </NavLink>

            </nav>
        </div>
    )
}

export default Navbar;