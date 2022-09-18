import React from 'react'

const BtnChange = ({ randomColor, getRandomAll }) => {

    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
        <div>
            <button className='card__btn'
                style={backgroundObj}
                onClick={getRandomAll}>&#62;</button>
        </div>
    )
}

export default BtnChange