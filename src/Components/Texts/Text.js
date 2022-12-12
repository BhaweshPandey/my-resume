import React from 'react'
import './Text.css'

const Text = ({TextName,style , Size , textColor}) => {
  return (
    <div className={style} style={{color:`${textColor}`,fontSize:`${Size}`}}>
        {TextName}
    </div>
  )
}

export default Text