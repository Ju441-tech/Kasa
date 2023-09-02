import './Rating.scss'
import greyStar from '../../assets/grey-star.svg'


function Rating({ stars }) {
  console.log(stars)
  const numberOfStars = []
  for (let i = 0; i < stars; i++) {
    numberOfStars.push('1')
  }
  console.log(numberOfStars)
  return <div>

    {numberOfStars.map(() => 
    
    <img src={greyStar}/>)}


  </div>






}
export default Rating