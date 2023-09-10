import './Rating.scss'
import greyStar from '../../assets/grey-star.svg'
import redStar from '../../assets/red-star.svg'


function Rating({ stars }) {
  const maxStars = [1, 2, 3, 4, 5]//nombre d'étoiles maximum que l'on peut avoir


  return (<div className='rating-main'>


    {maxStars.map((element) =>//On parcours les 5 éléments du tableau maxstars, tant que sa valeur est in férieure à par exemple 3 étoiles, on créer une div étoile rouge, si on arrive à 4 du tableau maxstars, il est supérieur à stars, donc on créer une étoile grise 
      stars >= (element) ?
        (<img alt="stars" key={element} src={redStar} className='star' />
        ) : (
          <img alt="stars" key={element} src={greyStar} className='star' />))}




  </div>)


}

export default Rating