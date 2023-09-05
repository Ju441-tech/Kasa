import './collapse.scss'
import { useState,useRef } from 'react'
import icon from '../../assets/dropdown-up.svg'



function Collapse({ content, title, contentType = "list" }) {

  const [isopen, setOpen] = useState(false)
  const [rotate, setRotate] = useState()
  
  const refer = useRef(null)
  const counter = useRef({count : 0})

  function toogle() {
  
    rotate === 'open' ? setRotate("close") : setRotate("open")
    setOpen(!isopen)
    counter.current.count++
    console.log(counter.current.value)
    
  }
  

  return (
    <div className='collapse-main'>
      <div className='collapse-title'>
        <div className='collapse-title-title'>{title}</div>
        {<img className={` collapse-icon ${rotate}`} src={icon} alt={icon} onClick={ toogle} />}

      </div>

      {isopen && <div className='collapse-content'>
        {contentType === 'list' ?
          (
            <ul className='collapse-content-text'>
              {content.map((elementList) =>
                <li key={elementList}>{elementList}</li>)}
            </ul>
          ) : (
            <p className='collapse-content-text' ref={refer}>{content}</p>
          )}
      </div>}
    </div>
  )
}

export default Collapse