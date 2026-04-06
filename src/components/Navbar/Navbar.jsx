import {homeIcon, projectsIcon, experianceIcon, toolsIcon, thoughtsIcon} from '../../assets/images'

function Navbar(){
    const icon="h-5 hover:scale-125 transition-transform duration-300 active:scale-100"
    return(
        <div className="fixed top-0 left-0 right-0 backdrop-blur-md flex items-center justify-center">
            {/* Navbar */}
            <nav className="flex items-center justify-between border border-neutral-500 gap-9 mt-8 px-6 py-3  rounded-2xl">

                {/* Icons */}

                {/* Home */}
                <a 
                href="">                    
                    <img className={icon} src={homeIcon} alt="" />
                </a>

                {/* Projects */}
                <a href="">
                    <img className={icon} src={projectsIcon} alt="" />
                </a>

                {/* Experiance */}
                <a href="">
                    <img className={icon} src={experianceIcon} alt="" />
                </a>

                {/* Tools */}
                <a href="">
                    <img className={icon} src={toolsIcon} alt="" />
                </a>

                {/* Thoughts */}
                <a href="">
                    <img className={icon} src={thoughtsIcon} alt="" />
                </a>

            </nav>
        </div>
    )
}

export default Navbar;