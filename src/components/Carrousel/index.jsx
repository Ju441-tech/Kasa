
import './carrousel.scss'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { useState } from 'react'
function Carrousel({ listePhotos, keyName }) {



    const [plusun, SetPlusUn] = useState(0)

    const numberPhotos = listePhotos.length
    return (
        <div className='carrousel-main'>
            <img className="carrousel-image" key={keyName} alt={listePhotos[plusun]} title={listePhotos[plusun]} src={listePhotos[plusun]} />
            {numberPhotos > 1 &&
                <div className='carrousel-setter'>
                    <div className='carrousel-arrows'>
                        <img src={arrowLeft} alt={arrowLeft} onClick={() => plusun >= 1 ? SetPlusUn(plusun - 1) : SetPlusUn(numberPhotos - 1)} />
                        <img src={arrowRight} alt={arrowRight} onClick={() => plusun < numberPhotos - 1 ? SetPlusUn(plusun + 1) : SetPlusUn(0)} />
                    </div>
                    <h1 className='carrousel-counter' > {plusun + 1}/{numberPhotos}</h1>
                </div>}
        </div>
    )
}
export default Carrousel