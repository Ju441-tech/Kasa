import './Rating.css'


function Rating({stars}){
  console.log(stars) 
  const numberOfStars=[]
  for (let i=0; i<stars ; i++){
    numberOfStars.push('1')
  }
  console.log(numberOfStars)
return <div>
        {numberOfStars.map(()=>
        <span>*</span>)}//C'est bien beau, mais il faut des étoiles qui se colorent en rouge car à la base, il y en a 5 grises
        </div>





    
}
export default Rating