import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa' }}>
      <div>
        <h1>MiTienda</h1>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
