import { createRef, useRef } from 'react'

export default function Referencias() {
  // Si tuviera componente de clase: let refMenu = createRef()
  let refMenu = useRef(),
    refMenuBtn = useRef()
  //console.log('refMenuBtn: ', refMenuBtn, 'refMenu: ', refMenu)
  const handleToggleMenu = (e) => {
    // Estilo Vanilla JS
    /*
    const menu = document.getElementById('menu')
    if (e.target.textContent === 'Menu') {
      e.target.textContent = 'Closed'
      menu.style.display = 'block'
    } else {
      e.target.textContent = 'Menu'
      menu.style.display = 'none'
    }
    */
    if (refMenuBtn.current.textContent === 'Menú') {
      refMenuBtn.current.textContent = 'Cerrar'
      refMenu.current.style.display = 'block'
    } else {
      refMenuBtn.current.textContent = 'Menú'
      refMenu.current.style.display = 'none'
    }
  }

  return (
    <>
      <h2>Hook useRef</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: 'none' }}>
        <a href="/">Sección 1</a>
        <br />
        <a href="/">Sección 2</a>
        <br />
        <a href="/">Sección 3</a>
        <br />
        <a href="/">Sección 4</a>
        <br />
        <a href="/">Sección 5</a>
      </nav>
      <hr />
    </>
  )
}
