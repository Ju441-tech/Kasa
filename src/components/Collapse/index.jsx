import './collapse.scss'
import { useState } from 'react'
import up from '../../assets/dropdown-up.png'
import down from '../../assets/dropdown-down.png'


function Collapse(props) {
  const [isopen, setOpen] = useState(false)
  const List=props.contentList
  return <div className='collapse-main'>
    <div className='collapse-title'>
      <div className='collapse-title-title'>{props.title}</div>
      <img className='collapse-icon-up' src={up} alt={up} onClick={() => setOpen(!isopen)} />
      <img className='collapse-icon-down' src={down} alt={down} onClick={() => setOpen(isopen)} />
    </div>

    {isopen && <div className='collapse-content'>


      <ul className='collapse-content-text'>{ List.map((elementList) =>
        <li key={elementList}>{elementList}</li>)}
      </ul> {/*!!Créaation d'une liste en entrant un tableau, si tableau avec un seul, ça ne change rien, si plusieurs éléments, cela les mettera les uns en dessous des autres*/}
    </div>}
    </div>}

    export default Collapse