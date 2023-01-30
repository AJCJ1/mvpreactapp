import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import ReactDOM from 'react-dom'
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
import PostFull from "./PostFull"

// initiates a new query client, sets the queries to cache for infinity so user
// can access blog posts faster, and less requests to my API server.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

const App = () => {
  return (
      <div className="root">
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about/physio" element={<Physio />} />
                <Route exact path="/about/me" element={<Me />} />
                <Route exact path="/about/testimonials" element={<Testimonials />} />
                <Route exact path="/about/terms-and-conditions" element={<Terms />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<PostFull />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/pricing" element={<Pricing />} />
              </Routes>
            </QueryClientProvider>
          </BrowserRouter>
          <Footer />
      </div>
    )
}

export default App
