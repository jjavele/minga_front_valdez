import Button from "./button"

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-[90vh] md:h-[40vh] justify-center items-center">
        <h1 className="flex w-full items-center justify-center text-center text-[40px] md:text-[48px] text-[#FFF] [font-family:Roboto] font-bold">Your favorite comic bookstore✨</h1>
        <p className="w-[90vw] md:w-[70vw] items-center justify-center text-center text-[16px] md:text-[24px] text-[#FFF] [font-family:Roboto] pb-3">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
        <Button title = "Started" href = '/begin' />
    </div>
  )
}
