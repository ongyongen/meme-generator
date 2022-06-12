import './styles.css';
import Header from './components/Header.js'
import Meme from './components/Meme.js'
import Form from './components/Form.js'

import {useState} from 'react'

const App = () => {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App;




