import Header from "../components/header/header"
import Navbar from "../components/navbar/navbar"
import Command from "../components/command/command"
import Footer from "../components/footer/footer"
import { Outlet } from "react-router-dom"
import Help from "../components/help/help"


export default function MainLayout() {
  return (
      <main className="min-h-screen lg:h-screen p-4 pb-2 flex flex-col font-mono">
        <section className="relative flex flex-col p-4 pb-0 flex-grow border-2 border-txPrimary overflow-hidden">
          <Header />
          <Navbar />
          <div className="mt-4 pb-4 relative flex-grow overflow-auto">
            <Outlet />
          </div>
          <Help />
          <Command />
        </section>
        <Footer />
      </main>
  )
}