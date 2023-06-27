export default function App() {

  return (
    <div className="flex flex-col bg-top bg-cover object-contain bg-no-repeat bg-center lg:bg-[url(../public/background.png)] bg-[url(../public/background-mobile.png)] w-full min-h-screen justify-between">

        <header>
          <nav className="pt-6 pe-8 ps-4 h-[55px] flex justify-between items-center">
              <img class="w-[55px] h-[55px]" src="/public/menu-mobile.png" alt="menu-image" />
              <img class="w-[54px] h-[32px]" src="/public/logo-mobile.png" alt="logo-image" />
          </nav>
        </header>
        
        <main className="flex justify-center">
          <div className="flex flex-col content-end items-center">
            <h1 className="text-center text-[40px] text-[#FFF] [font-family:Roboto] font-bold w-[83vw]">Your favorite comic book store</h1>
            <p className=" text-center text-[16px] text-[#FFF] [font-family:Roboto] md:w-[50vw] w-[83vw] pb-3">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
            <div className="flex justify-center align-middle md:w-[22vw] w-[83vw] md:h-[55px] h-[68px] bg-[#4338CA] md:rounded-[6px] rounded-[50000px] gap-10 px-10">
              <p className="flex text-[24px] text-[#FFF] [font-family:Roboto] items-center block sm:hidden self-center">Started</p>
              <p className="flex text-[24px] text-[#FFF] [font-family:Roboto] items-center hidden sm:block self-center">Let's go!</p>
            </div>
              <div className='hidden sm:block mt-64'>
              <div className='flex w-[100vw] lg:h-[39vh] h-[30vh] bg-[#FFF] justify-center items-center'>
                <div className='flex w-[90vw] h-[23vh] bg-[#4338CA] justify-around items-center'>
                  <img className='w-[2vw]' src="/public/left-arrow.png" alt="footer-1" />
                  <img className='w-[15vw]' src="/public/footer_1.png" alt="footer-1" />
                  <img className='w-[13vw] mb-12' src="/public/footer_2.png" alt="footer-2" />
                  <p className='w-[35vw] text-center text-[16px] text-[#FFF] [font-family:Roboto]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
                  <img className='w-[2vw]' src="/public/right-arrow.png" alt="footer-1" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className='flex w-[100vw] h-[7vh] md:h-[8vh] bg-[black] items-center justify-around'>
            <img className='w-[4vw]' src="./facebook.png" alt="facebook-logo" />
            <img className='w-[3vw]' src="./instagram.png" alt="instagram-logo" />
            <img className='w-[3vw]' src="./whatsapp.png" alt="whatapp-logo" />
        </footer>
    </div>
  )
}

/*
<div className='flex flex-column h-[130px] bg-[#4338CA] justify-around items-center sm:hidden'>
            <img className="w-[18vw] sm:hidden" src="/public/footer_1.png" alt="footer-1" />
            <img className="w-[20vw] mb-16 sm:hidden" src="/public/footer_2.png" alt="footer-2" />
            <p className='w-[50vw] flex text-center text-[11px] text-[#FFF] [font-family:Roboto] sm:hidden'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>


//background: linear-gradient(0deg, #000 0%, #000 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
*/
/*
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
