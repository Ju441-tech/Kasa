import { useParams } from "react-router-dom"
import logements from '../../datas/logements.json'
import './flat.scss'
import Collapse from "../../components/Collapse"
import Carroussel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import Error from '../../pages/404'


function FicheLogement() {

    const { logementId } = useParams()

    const logement = logements.find((element) => element.id === logementId)//cherche si l'adresse récupérée existe dans le fichier logement

    if (!logement) {//Si aucun logement ne correspond, alors on se redirige vers la page error
        return <Error />

    }
    else {

        for (let logement of logements) {
            if (logementId === logement.id) {
                let name = logement.host.name.split(' ')//sépare les noms et prénoms de l'hôte en créant un objet contenant un {"prénom","nom"


                return (<div className="flat-main">
                    <Carroussel keyName={logement.pictures} listePhotos={logement.pictures} />

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
                                <div className="host-name">
                                    <h3 className="host-name">{name[0]}<br></br>{name[1]}</h3>
                                </div>
                                <img className="host-picture" key={logement.host.picture} src={logement.host.picture} alt={logement.host.name} />

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
}
export default FicheLogement