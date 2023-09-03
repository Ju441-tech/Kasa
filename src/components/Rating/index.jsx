import './Rating.scss'
import greyStar from '../../assets/grey-star.svg'
import redStar from '../../assets/yellow-star.svg'
import { useState } from 'react'

function Rating({ stars }) {
  const maxStars = [1, 2, 3, 4, 5]
  const ratingStars = []
  const result = []
  for (let i = 0; i < stars; i++) {
    ratingStars.push(i + 1)

  }
  for (let i = 0; i < 5; i++) {

    maxStars[i] === ratingStars[i] ? result.push('redstar') : result.push('greystar')
  }


  return (<div className='rating-main'>


    {result.map((element) =>
      <img src={redStar} className={element}/>
      
    )}



  </div>)


}

export default Rating