import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Menu from './components/Menu'
import Error404 from './pages/Error404'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import { useState } from 'react'
import { PRODUCTS, SERVICES } from './utils/constants'
import Services from './pages/Services'
import ServicesHome from './pages/ServicesHome'
import ServicesList from './pages/ServicesList'
import ServicesGuarantee from './pages/ServicesGuarantee'
import ServiceDetail from './pages/SErviceDatail'

function App() {
  const [products, setProducts] = useState(PRODUCTS)
  const [services, setServices] = useState(SERVICES)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesHome />} />
            <Route path="list" element={<ServicesList services={services}/>} />
            <Route path=":id" element={
              <>
                <ServicesList services={services}/>
                <ServiceDetail services={services}/>
              </>
            } />
            <Route path="guarantee" element={<ServicesGuarantee />} />
          </Route>
          <Route
            path="/products/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
