import { useState, useEffect } from "react";

export const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);

  // Como no tiene dependency array se ejecuta constantemente
  /*
  useEffect(() => {
    console.log('Fase de Actualización')
  })
  */

  // Como el dependency array es [], se ejecuta al montar el componente (se ejecuta 1 sola vez)
  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  // solo se ejecuta cuando scrollY varia
  useEffect(() => {
    console.log("Fase de Actualización");
    const detectarScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  // Si tengo return es la parte de desmontaje del efecto, me sirve para:
  // Desuscribirse de servicios, Desconectarse de API ó Limpiar intervalos de tiempos (temporizadores)
  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect and LifeCycle</h2>
      <p>Scroll Y of browser {scrollY}px</p>
      <hr />
    </>
  );
};
