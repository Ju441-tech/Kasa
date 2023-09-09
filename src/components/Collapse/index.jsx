import './collapse.scss'
import { useState} from 'react'
import icon from '../../assets/dropdown-up.svg'
import React from 'react'



function Collapse({ content, title, contentType = "list" }) {

  const [isopen, setOpen] = useState(false)
  const [isrotate, setRotate] = useState()
  


  function toogle() {
  
    isrotate === 'open' ? setRotate("close") : setRotate("open")
    setOpen(!isopen)
    
    
  }
  

  return (
    <div className='collapse-main ' >
      <div className='collapse-title'>
        <div className='collapse-title-title'>{title}</div>
        {<img className={` collapse-icon ${isrotate}`} src={icon} alt={icon} onClick={ toogle} />}

      </div>

       { <div className={`collapse-content  ${isopen? 'visible': ''}`} >
        {contentType === 'list' ?
          (
            <ul className='collapse-content-text'>
              {content.map((elementList) =>
                <li key={elementList}>{elementList}</li>)}
            </ul>
          ) :(
            <p className={`collapse-content-text   `} >{content}</p>
          )}
      </div>}
    </div>

  )
}

export default Collapse