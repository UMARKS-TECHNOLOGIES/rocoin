import React from 'react'
import Home from './pages/landingPage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "@fontsource/inter/600"
import "@fontsource/inter/500"
import "@fontsource/inter/400"


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