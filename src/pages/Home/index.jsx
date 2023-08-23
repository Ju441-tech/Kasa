import photo from '../../assets/img-home.png'
import './home.scss'
import Gallery from '../../components/gallery'
import Baner from '../../components/Baner'


function Home() {
const text="Chez vous, partout et ailleurs."
    return (<div className='home-main'>
        <div className='home-baner'>
        <Baner photo={photo} text={text}/>
        </div>
        <Gallery/>
        
    </div>)

}
export default Home