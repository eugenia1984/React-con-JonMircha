import './Estilos.css'
import moduleStyles from './Estilos.module.css'
import './Estilos.scss'

export default function Estilos() {
  const myStyles = {
    borderRadius: '1.25rem',
    margin: '1.5rem auto',
    maxWidth: '50%'
  }

  return (
    <section className="estilos">
      <h2>Styles CSS in React</h2>
      <h3 className="bg-react">Styles in external CSS style sheet</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: '1.25rem', margin: '1.5rem 2.75rem' }}
      >
        Styles inline (style atribute)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Styles inline (style atribute store as an object in a variable)
      </h3>
      <h3>Adding normalize with: @import normalize</h3>
      <h3 className={moduleStyles.error}>Styles with modules (error)</h3>
      <h3 className={moduleStyles.success}>Styles with modules (success)</h3>
      <h3 className="bg-sass">Styles with SASS</h3>
      <hr />
    </section>
  )
}
