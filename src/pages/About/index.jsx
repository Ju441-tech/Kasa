
import photo from '../../assets/img-about.png'
import './about.scss'
import Collapse from '../../components/Collapse/index.jsx'
import Baner from '../../components/Baner'
const titre1 = "Fiabilité"
const contenu1 = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
const titre2 = 'Respect'
const contenu2 = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
const titre3 = 'Service'

const titre4 = 'Sécurité'
const contenu4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
function APropos() {
    return (<div className='about-main'>


      <Baner photo={photo} className='about-baner'/>
        <div className='collapses-grid'>
          
            <Collapse title={titre1} contentType="text" content={contenu1} />
          
            <Collapse title={titre2} contentType="text" content={contenu2} />
            <Collapse title={titre3} contentType="text" content={contenu2} />
            <Collapse title={titre4} contentType="text" content={contenu4} />
        </div>





    </div>
    )
}
export default APropos