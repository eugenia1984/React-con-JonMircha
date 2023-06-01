# 06-react-memorizacion

---

Se cachean componentes y funciones para que cuando se está renderizando un componente por el paso de props, pero internamente tiene otros componentes que no han sido modificados, permanezcan en cache y no se vuelven a renderizar.

Pero para que pase esto es muy costo, por eso hay que usar con cautela.

---

## React Memo

- Se encarga de memorizar un componente

- Lo vuelve a memorizar al momento de que sus props cambian

- Evita re-renderizados

- Hay que evitarlo en la medida de lo posible, pues podría ser más costosa la tarea de memorización que el re-renderizado del componente.

- Usalo cuando...

... tenemos muchos elementos renderizados en una lista

... llamamos datos de APIs

... Un componente se vuelve muy pesado

... salen alertas de rendimiento en la consola

---


## useCallback

- Para memorizar funciones puras, si el componente a memorizar recibe como **props** a **funciones** entonces usamos **useCallback**


```JSX
// const add = () => setCounter(counter + 1)
const add = useCallback(() => setCounter(counter + 1), [counter])
```

- ¿Qué hace? Memoriza una función, para no volverla a definir en cada render.

- ¿Cuándo usarlo?

-Úsalo siempre que se pase una función como prop a un componente memorizado.

-Úsalo siempre que se pase una función como parámetro de un efecto.

---

## useMemo

- Memoriza un valor calculado, es decir, el resultado de una función.

- Genera propiedades computadas.

- Úsalo en procesos pesados.

---

## Ejercicio

![image](https://github.com/eugenia1984/React-con-JonMircha/assets/72580574/e06540bd-e9af-4c37-b06e-9863c50082b4)

---
