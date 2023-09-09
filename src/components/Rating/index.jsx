import './Rating.scss'
import greyStar from '../../assets/grey-star.svg'
import redStar from '../../assets/red-star.svg'


function Rating({ stars }) {
  const maxStars = [1, 2, 3, 4, 5]


  return (<div className='rating-main'>


    {maxStars.map((element) =>
      stars >= (element) ?
        (<img alt="stars" key={element} src={redStar} className='star' />
        ) : (
          <img alt="stars" key={element} src={greyStar} className='star' />))}




  </div>)


}

export default Rating