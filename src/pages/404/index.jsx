import Errorimg from '../../assets/404.svg'
import './Error404.scss'
import { Link } from 'react-router-dom'
function Error() {
    return (<div className='error-main'>
        <img className='error-image' src={Errorimg} alt="404" />
        <h2 className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className='error-link-home'>Retourner sur la page d'acceuil</Link>
    </div>)
}
export default Error