import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Command from "./components/command/command"

export default function App() {
  // select page color
  document.body.style.backgroundColor = "black"

  return (
    <Router>
      <main className="h-screen p-4 pb-2 flex flex-col">
        <section className="relative flex flex-col p-4 pb-2 flex-grow border-2 border-white">
          <Header />
          <Navbar />
          <div className="mt-4 relative flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Command />
        </section>
        <Footer />
      </main>
    </Router>
  )
}