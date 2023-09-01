import logo from '../../assets/logo-blanc.svg'
import './footer.scss'

function Footer() {
    return (
        <div className='footer-main'>
            <img src={logo} alt='logo-blanc' className='footer-logo' />
            <div className='footer-content'>
                <p className='footer-title'>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer