import { useState } from 'react'
import MemeData from './MemeData.js'

const Meme = () => {

    const [meme, setMeme] = useState("")

    const getNewMeme = () => {
        let randomNum = Math.floor(Math.random() * (MemeData.data.memes.length))
        let chosen = MemeData.data.memes[randomNum].url
        return setMeme(() => chosen)
    }

    return (
        <div className="meme">
            <input type="text" className="meme-input" placeholder="top text"/>
            <input type="text"className="meme-input" placeholder="bottom text"/>
            <button onClick={getNewMeme} className="create-meme">Get new Meme!</button>
            <img src={meme} className = "meme-image"></img>
        </div>
    )
}

export default Meme