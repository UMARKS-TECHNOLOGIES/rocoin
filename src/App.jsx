import React from 'react'
import Home from './pages/landingPage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "@fontsource/poppins/600"
import "@fontsource/poppins/500"
import "@fontsource/poppins/400"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App