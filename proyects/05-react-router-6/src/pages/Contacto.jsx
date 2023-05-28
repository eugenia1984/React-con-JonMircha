import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Contacto = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/contact')
  }, [])
  return (
    <div>
      <h2>Contacto</h2>
    </div>
  )
}
