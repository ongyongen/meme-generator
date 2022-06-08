import MemeData from './MemeData.js'

const Meme = () => {

    function handleOnMouseOver(e) {
        let randomNum = Math.floor(Math.random() * (MemeData.data.memes.length))
        let chosen = MemeData.data.memes[randomNum].name
        console.log(chosen)
    }

    return (
        <div className="meme">
            <input type="text" className="meme-input" placeholder="top text"/>
            <input type="text"className="meme-input" placeholder="bottom text"/>
            <button className="create-meme" onMouseOver={handleOnMouseOver}>Create Meme!</button>
        </div>
    )
}

export default Meme