import Hero from "./Hero"

export default function NavBar() {
  return (
    <header className='h-[100vh] md:h-[60vh] md:w-full md:absolute top-0 bg-no-repeat bg-cover md:bg-center md:bg-fit-[60vh] md:bg-[url(../public/background.png)] bg-[url(../public/background-mobile.png)]'>
        <nav className="pe-8 ps-4 h-[55px] flex justify-between items-center">
            <img class="w-[55px] h-[55px]" src="/public/menu-mobile.png" alt="menu-image" />
            <img class="w-[54px] h-[32px]" src="/public/logo-mobile.png" alt="logo-image" />
        </nav>
        <Hero />
        
    </header>
        
  )
}
