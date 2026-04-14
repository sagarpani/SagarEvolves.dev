import {homeIcon, projectsIcon, experianceIcon, toolsIcon, thoughtsIcon} from '../../assets/images'

function Navbar(){

    const iconStyle ="h-5 hover:scale-125 transition-transform duration-300 active:scale-100"
    const iconTooltipStyle = "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm  rounded-lg px-3 py-[3px] opacity-0 transition-all duration-500 ease-in-out group-hover:top-full group-hover:translate-y-5 group-hover:opacity-100"

    return(
        <div className="fixed top-0 left-0 right-0 flex items-center justify-center">
            {/* Navbar */}
            <nav className="flex items-center justify-between border border-neutral-400  gap-9 mt-8 px-6 py-3  rounded-2xl  
            bg-linear-to-r from-black via-neutral-950 to-neutral-900
            ">

                {/* Icons */}

                {/* Home */}
                <a 
                className='relative group inline-block'
                href="">                    
                    <img className={iconStyle} src={homeIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Home</div>
                </a>

                {/* Projects */}
                <a 
                className='relative group inline-block'
                href="">
                    <img className={iconStyle} src={projectsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Projects</div>
                </a>

                {/* Experiance */}
                <a 
                className='relative group inline-block'
                href="">
                    <img className={iconStyle} src={experianceIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Experiance</div>
                </a>

                {/* Tools */}
                <a 
                className='relative group inline-block'
                href="">
                    <img className={iconStyle} src={toolsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Tools</div>
                </a>

                {/* Thoughts */}
                <a 
                className='relative group inline-block'
                href="">
                    <img className={iconStyle} src={thoughtsIcon} alt="" />
                    <div className={`${iconTooltipStyle} bg-neutral-700`}>Thoughts</div>
                </a>

            </nav>
        </div>
    )
}

export default Navbar;