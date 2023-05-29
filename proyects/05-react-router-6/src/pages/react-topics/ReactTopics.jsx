import { Link, Outlet } from 'react-router-dom'

export const ReactTopics = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        borderTop: '1px solid black'
      }}
    >
      <h2>React Topics</h2>
      <h3>Choose a topic of React to know about:</h3> 
      <nav>
        <Link to="/react-topics/jsx">JSX</Link>
        <Link to="/react-topics/props">props</Link>
        <Link to="/react-topics/states">states</Link>
        <Link to="/react-topics/components">Components</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
