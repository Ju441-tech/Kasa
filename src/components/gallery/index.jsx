import Logements from '../../datas/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.scss'


function Gallery() {

    return (
        <div className='carre-gris'>
            {Logements.map((element) =>//On lit chaque valeur du fichier logement et pour chaque logement, on en extrait la valeur du titre et de la photo de couverture

                <div key={element.id} className='card'>

                    <Link to={`/Flat/${element.id}`} >

                        <div className='card-title'>{element.title}</div>
                        <img key={element.cover} src={element.cover} alt={element.cover} className='card-img' />


                    </Link>
                </div>
            )}
        </div>
    )
}
export default Gallery