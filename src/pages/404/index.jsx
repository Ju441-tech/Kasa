import Errorimg from '../../assets/404.svg'
import './Error404.scss'
import { Link } from 'react-router-dom'
function Error() {
    return (<div className='main'>
        <img src={Errorimg} alt="404" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" id='link-return-home'>Retourner sur la page d'acceuil</Link>
    </div>)
}
export default Error