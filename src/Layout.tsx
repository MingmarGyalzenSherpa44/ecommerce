import Banner from './molecules/Banner'
import Footer from './molecules/Footer'
import NavBar from './molecules/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Banner />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
