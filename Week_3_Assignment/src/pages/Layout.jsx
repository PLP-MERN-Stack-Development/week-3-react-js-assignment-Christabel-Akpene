import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout