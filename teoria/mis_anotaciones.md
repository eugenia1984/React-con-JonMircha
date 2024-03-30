# <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Mis anotaciones



## <img width="30" height="30" src="https://img.icons8.com/office/30/react.png" alt="react"/> Tips

- En **Google Chrome** me bajo la extension **React developer Tools** y al inspeccionar en el navegador , en el menu de la caja de consula de desarrollo, veo **Components** y **Profiler**.

- Si trabajas con VSC es recomendable instalar la extension **Simple React Snippets**, para tener estos atajos:

| Snippet | Renders                                       |
| ------- | --------------------------------------------- |
| imr     | Import React                                  |
| imrc    | Import React / Component                      |
| imrd    | Import ReactDOM                               |
| imrs    | Import React / useState                       |
| imrse   | Import React / useState useEffect             |
| impt    | Import PropTypes                              |
| impc    | Import React / PureComponent                  |
| cc      | Class Component                               |
| ccc     | Class Component With Constructor              |
| cpc     | Class Pure Component                          |
| ffc     | Function Component                            |
| sfc     | Stateless Function Component (Arrow function) |
| cdm     | componentDidMount                             |
| uef     | useEffect Hook                                |
| cwm     | componentWillMount                            |
| cwrp    | componentWillReceiveProps                     |
| gds     | getDerivedStateFromProps                      |
| scu     | shouldComponentUpdate                         |
| cwu     | componentWillUpdate                           |
| cdu     | componentDidUpdate                            |
| cwun    | componentWillUnmount                          |
| cdc     | componentDidCatch                             |
| gsbu    | getSnapshotBeforeUpdate                       |
| ss      | setState                                      |
| ssf     | Functional setState                           |
| usf     | Declare a new state variable using State Hook |
| ren     | render                                        |
| rprop   | Render Prop                                   |
| hoc     | Higher Order Component                        |
| cp      | Context Provider                              |
| cpf     | Class Property Function                       |


---

Desde la versión 17 de React ya no es necesario importar React, con create-ract-app; pero... se puede ver como una mala practica, ya que en versiones anteriores a la 17 te estaría amrcando un error.

Entonces es mejor en **App.js** agregar:

```JavaScript
import React from "React"
```

---

