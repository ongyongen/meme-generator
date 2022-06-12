import { useState, useEffect } from 'react'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1ur9b0.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(() => data.data.memes))
    }, [])

    const getNewMeme = () => {
        let randomNum = Math.floor(Math.random() * allMemes.length)
        let chosenMeme = allMemes[randomNum].url
        setMeme((prev) => {
            return {
                ...prev,
                randomImage : chosenMeme
            }
        })
    }

    const [data, setFormData] = useState(
        {
            topText:"",
            bottomText:""
        }
    )
    const updateText = (event) => {
        const {name, value} = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    return (
        <div className="meme">
            <input 
                type="text" 
                name="topText"
                className="meme-input" 
                placeholder="top text" 
                onChange={updateText}
                value={data.topText}
            />
            <input 
                type="text"
                name="bottomText"
                className="meme-input" 
                placeholder="bottom text" 
                onChange={updateText}
                value={data.bottomText}
            />

            <button onClick={getNewMeme} className="create-meme">Get new Meme!</button>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"></img>
                <h2 className="meme-text top">{data.topText}</h2>
                <h2 className="meme-text bottom">{data.bottomText}</h2>
            </div>
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