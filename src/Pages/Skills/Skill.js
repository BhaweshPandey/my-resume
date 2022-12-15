import React from 'react'
import Text from '../../Components/Texts/Text'
import './Skill.css'

const Skill = () => {
  return (
    <div className='Skill'>
      <Text TextName={'SKILLS'} textColor={'white'} Size={'50px'} />
      <div className='skill-container'>
        <div className='Skill-img'>
        </div>
        <div className='skils'>
          <div className="skill-item">HTML : <div className="skillline-1"> </div> </div>
          <div className="skill-item">CSS : <div className="skillline-2"> </div> </div>
          <div className="skill-item">REACT.JS : <div className="skillline-3"> </div> </div>
          <div className="skill-item">JAVASCRIPTS : <div className="skillline-4"> </div> </div>
        </div>
      </div>
    </div>
  )
}

export default Skill