import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./style.css"

//Components
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)

// enabling hot modules replacement

if (module.hot) {
  module.hot.accept()
}
