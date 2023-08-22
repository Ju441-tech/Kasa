import Logements from '../../datas/logements.json'
import React from 'react'
import {Link} from'react-router-dom'
import './gallery.css'




function Gallery() {

    return (<div className='carre-gris'>
        {Logements.map((element) =>

            <React.Fragment key={element.id}>
                <Link to={`/Flat/${element.id}`} className='card'>
                    <img className='card-img' src={element.cover} alt="logement" />
                    <div className='card-title'>{element.title}</div>
                </Link>
            </React.Fragment>

        )}
    </div>)
}
export default Gallery