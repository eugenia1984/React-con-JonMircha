import { Route } from 'react-router-dom'

// export const PrivateRoute = (props) => {
//   return (
//     <div>
//       <Route {...props} />
//     </div>
//   )
// }

export const PrivateRoute = ({path, component}) => {
  return (
    <div>
      <Route path={path} element={component} />
    </div>
  )
}

/**si esta autorizado es true, sino null o false**/
// let auth = true 
// Con Firebase se puede hacer mas complejo

// export const PrivateRoute = ({component:Component, ...rest}) => {
// le doy el alias Component para que lo tome como un componente
//   return <Route {...rest} >{auth? <Component /> : <Redirect to="/login"/>} </Route>
// }