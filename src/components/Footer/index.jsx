
import './footer.scss'
import footerdesktop from  '../../assets/footer-desktop.svg'
import footermobile from  '../../assets/footer-mobile.png'
function Footer (){
    return (<div>
        <img className='footer-desktop' src={footerdesktop} alt="footer-desktop"/>
        <img className='footer-mobile' src={footermobile} alt="footer-mobile"/>

    </div>)
}
export default Footer