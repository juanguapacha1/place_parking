import logo from '../assets/logo.jpg'
function Nav() {
    return (
        <nav className="barra-navegacion">
            <img src={logo} alt="logo" />
            <p className='logo'>PLACE PARKING</p>
        </nav>
    )
}

export default Nav