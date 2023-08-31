import { useParams } from "react-router-dom"
import logements from '../../datas/logements.json'
import './flat.css'
import Collapse from "../../components/Collapse"
import Carroussel from '../../components/Carrousel'
import Rating from '../../components/Rating'


function FicheLogement() {

    const { logementId } = useParams()
    for (let logement of logements) {
        if (logementId === logement.id) {
            return (<div>
                <Carroussel listePhotos={logement.pictures}/>
                
                <div className="logement-item">
                    <div className="logement-ident">
                        <div className='logement-name'>                       
                        <h2 className="logement-title">{logement.title}</h2>
                        <h3 className="logement-subtitle">{logement.location}</h3>
                        </div>
                        
                        <div className='logement-grid-tags'>
                        <ul className="logement-tags">{logement.tags.map((tag) =>
                            <li key={tag} className="tag">{tag}</li>)}
                        </ul>
                        </div>
    
                    </div>

                    <div className="logement-host">
                        <div className="host-ident">
                            <h3 className="host-name">{logement.host.name}</h3>
                            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />

                        </div>
                        <Rating className="logement-rating" stars={logement.rating}/>

                    </div>


                </div>


                <div className="logement-collapse">
                    <Collapse title="Description" contentDescription={logement.description} />
                    <Collapse title="Equipements" contentList={logement.equipments} />
                </div>
            </div>)
        }
    }


}
export default FicheLogement