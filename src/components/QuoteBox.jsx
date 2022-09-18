import React from 'react'
import BtnChange from './BtnChange'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

  const colorObj = {
    color: randomColor
  }



  return (
    <article style={colorObj} className='card'>
      <p className='card__quote'>{randomQuote.quote} </p>
      <h1 className='card__author'>{randomQuote.author}</h1>
      <BtnChange
        randomColor={randomColor}
        getRandomAll={getRandomAll} />
    </article>
  )
}

export default QuoteBox