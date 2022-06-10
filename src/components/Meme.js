import { useState } from 'react'
import MemeData from './MemeData.js'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1ur9b0.jpg"
    })

    const getNewMeme = () => {
        let randomNum = Math.floor(Math.random() * (MemeData.data.memes.length))
        let chosenMeme = MemeData.data.memes[randomNum].url
        setMeme((prev) => {
            return {
                ...prev,
                randomImage : chosenMeme
            }
        })
    }

    return (
        <div className="meme">
            <input type="text" className="meme-input" placeholder="top text"/>
            <input type="text"className="meme-input" placeholder="bottom text"/>
            <button onClick={getNewMeme} className="create-meme">Get new Meme!</button>
            <img src={meme.randomImage} className="meme-image"></img>
        </div>
    )
}

export default Meme

/*
const addItem = () => {
    /* Should not use arr.push() as we are modifying arr & arr.push() returns int instead of arr 
    [...prev] creates a reference to the prev array 
    return setNewArr(prev => [...prev, prev.length+1]) 
} 

const [meme, setMeme] = useState("https://i.imgflip.com/1ur9b0.jpg",)

const getNewMeme = () => {
    let randomNum = Math.floor(Math.random() * (MemeData.data.memes.length))
    let chosen = MemeData.data.memes[randomNum].url
    return setMeme(() => chosen)
}

*/