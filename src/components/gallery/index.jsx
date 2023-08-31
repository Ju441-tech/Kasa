import Logements from '../../datas/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'




function Gallery() {

    return (
        <div className='carre-gris'>
            {Logements.map((element) =>

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