import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MenuBasicConcepts } from './MenuBasicConcepts'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { User } from '../pages/User'
import { Products } from '../pages/Products'
import { Error404 } from '../pages/Error404'
import { Contacto } from '../pages/Contacto'
import { ReactTopics } from '../pages/react-topics/ReactTopics'
import { ReactTopicsJsx } from '../pages/react-topics/ReactTopicsJsx'
import { ReactTopicsProps } from '../pages/react-topics/ReactTopicsProps'
import { ReactTopicsStates } from '../pages/react-topics/ReactTopicsStates'
import { ReactTopicsComponents } from '../pages/react-topics/ReactTopicsComponents'
import './BasicConcepts.css'

export const BasicConcepts = () => {
  return (
    <div className="basic-concepts">
      <h2>Basic Concepts</h2>
      <BrowserRouter>
        <MenuBasicConcepts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/react-topics" element={<ReactTopics />}>
            <Route path="jsx" element={<ReactTopicsJsx />} />
            <Route path="props" element={<ReactTopicsProps />} />
            <Route path="states" element={<ReactTopicsStates />} />
            <Route path="components" element={<ReactTopicsComponents />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
