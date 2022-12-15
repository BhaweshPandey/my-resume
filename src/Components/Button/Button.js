import React from 'react'
import './Button.css'

const Button = ({ ButtonName, style, Size, textcolor, bgColor, width,color, height }) => {
    return (
        <div className='Button'>
            <button type='submit' className={style} id='button'
                style=
                {{ color: `${textcolor}`, fontSize: `${Size}`, backgroundColor: `${bgColor}`,color:`${color}`, width: `${width}` , height: `${height}`}}  >
                {ButtonName}
            </button>
        </div>
    )
}

export default Button