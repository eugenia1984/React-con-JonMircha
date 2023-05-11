import './Estilos.css'

export default function Estilos() {
  return (
    <section className="estilos">
      <h2>Styles CSS in React</h2>
      <h3 className="bg-react">Styles in external CSS style sheet</h3>
      <h3 className="bg-react" style={{borderRadius:'1.25rem', margin: '1.5rem 2.75rem'}}>Styles inline (style atribute)</h3>
      <hr />
    </section>
  )
}
