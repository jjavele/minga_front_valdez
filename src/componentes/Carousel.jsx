import Arrow from "./Arrow"

export default function Carousel() {

    let iconLeft = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    let iconRight = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

    return (
        <div className="flex flex-col h-[0] md:h-[100vh] items-center md:justify-end md:pb-16 bg-[#FFF]">
            <div className='flex md:w-[90vw] h-[26vh] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] rounded-[6px] justify-around items-center'>
                <Arrow icon = {iconLeft} />
                <img className='w-[15vw] hidden md:block' src="/public/footer_1.png" alt="footer-1" />
                <img className='w-[12vw] mb-6 hidden md:block' src="/public/footer_2.png" alt="footer-2" />
                <p className='w-[35vw] text-center lg:text-[20px] text-[16px] text-[#FFF] [font-family:Roboto] hidden md:block'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
                <Arrow icon = {iconRight} />
            </div>
        </div>
    )
}
