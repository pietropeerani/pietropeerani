import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinksLayout from "./layouts/linksLayout";
import Links from "./pages/links/links";
import MainLayout from "./layouts/mainLayout";
import NotFound from "./pages/notFound/notFound";
import Home from "./pages/home/home";
import Skills from "./pages/skills/skills";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Works from "./pages/works/works";
import Certifications from "./pages/certifications/certifications";
import { useEffect } from "react";
import SnakeGame from "./pages/snake/snake";

export default function App() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        (event.key === '=' || event.key === '+' || event.key === '-' || event.key === '–')
      ) {
        event.preventDefault();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/links" element={<LinksLayout />}>
          <Route index element={<Links />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/snake" element={<SnakeGame />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
