import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {
  
  

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  //llama funcion para optener Indice Random por primera vez
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  //Se guarda el estado de cada dato
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }
//Calculo de Quote y Color Aleatorio 1:32:19
  const getRandomAll =() => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }
  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
       randomQuote={randomQuote}
       randomColor={randomColor}
       getRandomAll={getRandomAll} />
    </div>
  )
}

export default App
