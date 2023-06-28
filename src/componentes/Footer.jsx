export default function Footer() {
  return (
    <footer className='flex flex-col h-[30vh] md:h-[50vh] justify-between md:content-around md:w-full md:justify-around'>
        <img className='hidden md:block md:w-full md:h-[30vh] md:rounded-b-[50vh]' src="./footer.png" alt="footer" />
        <div className="flex flex-col h-[30vh] justify-around w-full md:justify-evenly md:flex-row">
            <div className="flex justify-between self-center w-[25vw] md:w-[15vw] md:justify-between items-center">
                <h6 className="">Home</h6>
                <h6>Mangas</h6>
            </div>
            <div className="flex justify-center md:items-center">
                <img src="/public/logofooter.png" alt="m-logo" />
                <img src="/public/minga-frame.png" alt="inga-logo" />
            </div>
            <div className="flex flex-col justify-center content-center md:items-center">
                <div className="flex w-[36vw] sm:w-[20vw] justify-between self-center md:items-center mb-3">
                    <img src="/public/facebook-black.png" alt="facebook-logo" />
                    <img src="/public/twitter-black.png" alt="twitter-logo" />
                    <img src="/public/vimeo-black.png" alt="vimeo-logo" />
                    <img src="/public/youtube-black.png" alt="youtube-logo" />
                </div>
                <button className="self-center w-[40vw] sm:w-[20vw] text-[#FFF] bg-[#4338CA] rounded-[30px]">Donate</button>
            </div>
        </div>
    </footer>
  )
}
