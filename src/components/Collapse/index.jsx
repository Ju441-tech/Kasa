import './collapse.scss'
import { useState } from 'react'
import up from '../../assets/dropdown-up.svg'



function Collapse({ content, title, contentType = "list" }) {

  const [isopen, setOpen] = useState(false)
  const [rotate, setRotate] = useState("")
  
  function toogle() {
    console.log('hello')
    rotate === 'open' ? setRotate("close") : setRotate("open")
    setOpen(!isopen)
    
  }

  return (
    <div className='collapse-main'>
      <div className='collapse-title'>
        <div className='collapse-title-title'>{title}</div>
        {<img className={` collapse-icon ${rotate}`} src={up} alt={up} onClick={toogle} />}

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