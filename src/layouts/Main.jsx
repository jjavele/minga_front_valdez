import NavBar from "../componentes/NavBar"
import Footer from "../componentes/Footer"
import Index from "../pages"

export default function Main({children}) {
  return (
    <div className='flex flex-col justify-between content-center align-middle bg-white min-h-screen'>
            <NavBar/>
            {/* contenido dinámico de cada interfaz */}
            {children}
            {Index}
            <Footer/>
    </div>
  )
}
