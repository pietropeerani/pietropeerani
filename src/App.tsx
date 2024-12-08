// import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Route, HashRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Command from "./components/command/command"
import Skills from "./pages/skills/skills"
import NotFound from "./pages/notFound/notFound"

export default function App() {
  return (
    <Router>
      <main className="h-screen p-4 pb-2 flex flex-col">
        <section className="relative flex flex-col p-4 pb-0 flex-grow border-2 border-txPrimary overflow-hidden">
          <Header />
          <Navbar />
          <div className="mt-4 pb-4 relative flex-grow overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Command />
        </section>
        <Footer />
      </main>
    </Router>
  )
}