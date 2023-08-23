import './collapse.scss'
import { useState } from 'react'
import up from '../../assets/dropdown-up.png'
import down from '../../assets/dropdown-down.png'


function Collapse(props) {
  const [isopen, setOpen] = useState(false)
  const contentList=props.content
  console.log(contentList.length)
  return <div className='collapse-main'>
    <div className='collapse-title'>
      <div className='collapse-title-title'>{props.title}</div>
      <img className='collapse-title-icon' src={up} alt={up} onClick={() => setOpen(!isopen)} />
    </div>

    {isopen && <div className='collapse-content'>


      <ul className='collapse-content-text'>{contentList.map((elementList) =>
        <li key={elementList}>{elementList}</li>)}
      </ul> {/*!!Créaation d'une liste en entrant un tableau, si tableau avec un seul, ça ne change rien, si plusieurs éléments, cela les mettera les uns en dessous des autres*/}
    </div>}
    </div>}

    export default Collapse