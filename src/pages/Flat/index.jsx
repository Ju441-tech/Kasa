import { useParams } from "react-router-dom"
import logements from '../../datas/logements.json'
import './flat.scss'
import Collapse from "../../components/Collapse"
import Carroussel from '../../components/Carrousel'
import Rating from '../../components/Rating'


function FicheLogement() {

    const { logementId } = useParams()
    for (let logement of logements) {
        if (logementId === logement.id) {
            return (<div className="flat-main">
                <Carroussel listePhotos={logement.pictures} />

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
                            <h3 className="host-name">a mettre sur 2 lignes avec map et si on lit
                            un" " espace vide, on met une blaise br{logement.host.name}</h3>
                            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />

                        </div>
                        <div className="logement-rating">
                            <Rating stars={logement.rating} />
                        </div>
                    </div>


                </div>


                <div className="logement-collapse">
                    <Collapse title="Description" contentType={"text"} content={logement.description} />
                    <Collapse title="Equipements" content={logement.equipments} />
                </div>
            </div>)
        }
    }


}
export default FicheLogement