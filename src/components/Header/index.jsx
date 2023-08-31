import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo-xl.png'


function Header() {
    return (
        <div className='header-main'>
            <img src={logo} alt="logo-rouge-Kasa" title="logo rouge Kasa" className='header-logo'/>
            <nav className="nav">
                <Link to="/" id="link-acceuil">Accueil</Link>
                <Link to="/About" id="link-apropos">A propos</Link>
            </nav>
        </div>
    )
}

export default Header
