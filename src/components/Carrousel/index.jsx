
import './carrousel.scss'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { useState } from 'react'
function Carrousel({ listePhotos, keyName }) {



    const [nextPhoto, SetNextPhoto] = useState(0)

    const numberPhotos = listePhotos.length//J'ai commencé par faire le compteur, en cliquant sur fleche droite : on augmente le nombre du compteur, si fleche gauche on diminue le nombre du compteur via setNextPhoto qui diminue ou augmente la valeur de nexPhoto
    return (
        <div className='carrousel-main'>
            <img className="carrousel-image" key={keyName} alt={listePhotos[nextPhoto]} title={listePhotos[nextPhoto]} src={listePhotos[nextPhoto]} />
            {numberPhotos > 1 &&
                <div className='carrousel-setter'>
                    <div className='carrousel-arrows'>
                        <img src={arrowLeft} alt={arrowLeft} onClick={() => nextPhoto >= 1 ? SetNextPhoto(nextPhoto - 1) : SetNextPhoto(numberPhotos - 1)} />
                        <img src={arrowRight} alt={arrowRight} onClick={() => nextPhoto < numberPhotos - 1 ? SetNextPhoto(nextPhoto + 1) : SetNextPhoto(0)} />
                    </div>
                    <h1 className='carrousel-counter' > {nextPhoto + 1}/{numberPhotos}</h1>
                </div>}
        </div>
    )
}
export default Carrousel