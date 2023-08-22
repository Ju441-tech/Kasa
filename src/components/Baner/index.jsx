import './baner.scss'
function Baner({photo, text}) {
    return <div>
        <div className='baner'>
            <img className='image' src={photo} alt={photo} title={photo} />
            <h1 className='title'>{text}</h1>
        </div>
    </div>
}
export default Baner