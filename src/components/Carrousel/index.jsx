
import './carrousel.scss'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import { useState } from 'react'
function Carrousel({ listePhotos}) {

    

const [plusun, SetPlusUn]=useState(0)
 console.log(listePhotos)
 const numberPhotos = listePhotos.length
    return <div className='carrousel-main'>
        <img className="carrousel-image" alt={listePhotos[plusun]} title={listePhotos[plusun-1]} src={listePhotos[plusun-1]} />
        <div className='carrousel-arrows'>
            
            <img src={arrowLeft} alt={arrowLeft} onClick={()=> plusun>1? SetPlusUn(plusun-1):SetPlusUn(numberPhotos)}/>
            <img src={arrowRight} alt={arrowRight} onClick={()=> plusun <numberPhotos ? SetPlusUn( plusun+1): SetPlusUn(1)}/>
            <h1 className='carrousel-counter' >{plusun}/{numberPhotos}</h1>
            
            
           
            
        </div>
        
      
        

    </div>


}
export default Carrousel