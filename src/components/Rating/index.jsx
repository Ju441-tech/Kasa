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
        <span>*</span>)}
        </div>





    
}
export default Rating