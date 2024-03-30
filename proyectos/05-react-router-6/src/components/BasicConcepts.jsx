import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Link
} from 'react-router-dom'
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
import { Login } from '../pages/auth/Login'
import { Dashboard } from '../pages/auth/Dashboard'
import './BasicConcepts.css'
// import { PrivateRoute } from './PrivateRoute'

export const BasicConcepts = () => {
  const LOGGED = true

  return (
    <div className="basic-concepts">
      <h2>Basic Concepts</h2>
      <h3>Hash Router</h3>
      <HashRouter>
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
          <Route path="/login" element={<Login />} />
          {/* Ejemplo de ruta privada sin tener que usar FireBase para autenticar*/}
          <Route
            path="/dashboard"
            element={LOGGED ? <Dashboard /> : <Login />}
          />
          {/* <PrivateRoute path="/dashboard" component={<Dashboard />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <h3>Browser Router</h3>
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
          <Route path="/login" element={<Login />} />
          {/* Ejemplo de ruta privada sin tener que usar FireBase para autenticar*/}
          <Route
            path="/dashboard"
            element={LOGGED ? <Dashboard /> : <Login />}
          />
          {/* <PrivateRoute path="/dashboard" component={<Dashboard />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
