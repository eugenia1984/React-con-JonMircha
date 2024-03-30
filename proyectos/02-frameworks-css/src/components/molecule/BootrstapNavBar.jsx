import BootstrapHamburguerMenu from '../atoms/BootrstrapHamburguerMenu'
import BootstrapHamburguerIcon from '../atoms/BootstrapHamburguerIcon'

export default function BootstrapNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <BootstrapHamburguerIcon />
        <BootstrapHamburguerMenu />
      </div>
    </nav>
  )
}
