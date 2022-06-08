import trollFace from '../img/troll-face.png'

const Header = (props) => {
    return (
        <div className="header">
            <img src={trollFace} />
            <h2 className="headerTitle">Meme Generator</h2>
        </div>
    )
}

export default Header