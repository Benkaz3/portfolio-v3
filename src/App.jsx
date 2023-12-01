import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Works from "./pages/Works"
import GlobalStyle from "./styles/GlobalStyle"


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="works" element={<Works />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

