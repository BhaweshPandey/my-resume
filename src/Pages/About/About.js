import React from 'react'
import AllImage from '../../Components/AllImage/AllImage'
import Text from '../../Components/Texts/Text'
import './About.css'

const About = () => {
    return (
        <div className='About'>
            {/* <Text TextName={'ABOUT ME'} Size={'40px'}/> */}
            <div className='About-Container'>
                <div className='About-img'>
                </div>
                <div className='About-me'>
                    <Text TextName={'BHAWESH PANDEY'} Size={'40PX'} />
                    <Text TextName={'I am Bhawesh Pandey . I am Front-end developer currently living in a uttarakhand (INDIA),'} Size={'14px'} textColor={'black'} />
                    <Text TextName={'currently building the moblie and web application for a newly Start Up ,bsite for us .'} Size={'14px'} textColor={'black'} />
                </div>
                <a href={AllImage.Resume} download="BhaweshResume" className="btn-download">Download CV
                    <i class="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default About