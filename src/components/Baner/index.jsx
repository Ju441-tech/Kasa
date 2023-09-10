import './baner.scss'
function Baner({ text, photo }) {
    return (

        <div className='baner'>
            <img src={photo} alt={photo} className='image' />

            <h1 className='title'>{text}</h1>

        </div>
    )
}
export default Baner