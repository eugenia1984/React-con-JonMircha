import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Moviendo el Scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    //Devolvemos una función para desuscribir el evento
    return () => { 
      window.removeEventListener("scroll", detectarScroll);
      console.log("*** Fase de Desmontaje ***");
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("*** Fase de Montaje ***");
  }, []);

  useEffect(() => {
    console.log("*** Fase de Actualización ***");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}