import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { Outlet } from "react-router"

function App() {
  

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  )
}

export default App
