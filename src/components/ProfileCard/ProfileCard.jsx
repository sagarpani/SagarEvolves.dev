function ProfileCard() {
    return (
        <div className="relative max-w-100 mt-30 flex flex-col justify-center items-center rounded-2xl border border-white overflow-hidden">
            {/* ProfileCard */}
            <img className="w-full rounded-t-2xl object-cover" src="../../../public/myImg.jpeg" alt="">
            </img>

            <div className="absolute w-full text-black p-5 bottom-0 bg-black/10 backdrop-blur-xl flex flex-col justify-start items-start gap-4 text-wrap object-cover">
                <p className="text-4xl font-semibold text-gray-300">Sagar Sekhar Pani</p>
                <p>Frontend developer who focuses on crafting clean, interactive, and well-structured user interfaces.</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProfileCard;