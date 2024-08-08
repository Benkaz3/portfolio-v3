import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Works from "./pages/Works"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import GlobalStyle from "./styles/GlobalStyle"
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"


export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter >
        <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="works" element={<Works />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} /> {/* Blog post route */}
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

