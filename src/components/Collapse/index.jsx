import './collapse.scss'
import { useState } from 'react'
import up from '../../assets/dropdown-up.png'
import down from '../../assets/dropdown-down.png'


function Collapse(props) {
  const [isopen, setOpen] = useState(false)

  return <div className='collapse-main'>
    <div className='collapse-title'>
      <div className='collapse-title-title'>{props.title}{isopen}</div>
      <img className='collapse-title-icon' src={up} alt={up} onClick={() => setOpen(!isopen)} />
      

    </div>

    {isopen && <div className='collapse-content'>
      

      <div className='collapse-content-text'>{props.content}</div>
    </div>}
  </div>

}
export default Collapse