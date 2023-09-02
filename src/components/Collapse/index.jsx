import './collapse.scss'
import { useState,useEffect } from 'react'
import up from '../../assets/dropdown-up.svg'
import down from '../../assets/dropdown-down.svg'


function Collapse({ content, title, contentType = "list" }) {
  const [isopen, setOpen] = useState(false)
  return (
    <div className='collapse-main'>
      <div className='collapse-title'>
        <div className='collapse-title-title'>{title}</div>
        {!isopen &&<img className='collapse-icon-up' src={up} alt={up} onClick={() => setOpen(!isopen)} />
        
      

        }
        {isopen && <img className='collapse-icon-down' src={down} alt={down} onClick={() => setOpen(!isopen)} />}
      </div>

      {isopen && <div className='collapse-content'>
        {contentType === 'list' ?
          (
            <ul className='collapse-content-text'>
              {content.map((elementList) =>
                <li key={elementList}>{elementList}</li>)}
            </ul>
          ) : (
            <p className='collapse-content-text'>{content}</p>
          )}
      </div>}
    </div>
  )
}

export default Collapse