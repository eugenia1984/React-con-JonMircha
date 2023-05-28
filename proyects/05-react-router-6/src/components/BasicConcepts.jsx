import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Error404 } from '../pages/Error404'
import { MenuBasicConcepts } from './MenuBasicConcepts'

export const BasicConcepts = () => {
  return (
    <div>
      <h2>Basic Concepts</h2>
      <BrowserRouter>
        <MenuBasicConcepts />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
      <hr />
    </div>
  )
}
