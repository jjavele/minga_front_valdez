import {useState} from "react"
import Hero from "./Hero"
import Display from "./Display"


export default function NavBar() {
  const [show, setShow] = useState(false)
  return (
    <>
      <header className='h-[100vh] md:h-[60vh] md:w-full md:absolute top-0 bg-no-repeat bg-cover md:bg-center md:bg-fit-[60vh] md:bg-[url(../public/background.png)] bg-[url(../public/background-mobile.png)]'>
          <nav onClick={()=>setShow(!show)} className="pe-8 ps-4 h-[55px] flex justify-between items-center navbar">
              <img className="w-[55px] h-[55px]" src="/public/menu-mobile.png" alt="menu-image" />
              <img className="w-[54px] h-[32px]" src="/public/logo-mobile.png" alt="logo-image" />
          </nav>
          {show && <Display show={show} setShow={setShow} />}
          <Hero />
      </header>
    </>     
  )
}
