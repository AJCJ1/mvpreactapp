import React from 'react'
import ReactDOM from 'react-dom'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Footer from "./components/Footer"
import Home from "./Home"
import Physio from "./Physio"
import Me from "./Me"
import Testimonials from "./Testimonials"
import Terms from "./Terms"
import Blog from "./Blog"
import Services from "./Services"
import Pricing from "./Pricing"

const App = () => {
  return (
      <div className="root">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about/physio" element={<Physio />} />
              <Route exact path="/about/me" element={<Me />} />
              <Route exact path="/about/testimonials" element={<Testimonials />} />
              <Route exact path="/about/terms-and-conditions" element={<Terms />} />
              <Route exact path="/blog" element={<Blog />} />
              {/* <Route path="/blog/:id" element={<Post />} /> */}
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/pricing" element={<Pricing />} />
            </Routes>
          </BrowserRouter>
          <Footer />
      </div>
    )
}

export default App

