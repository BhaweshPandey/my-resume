import React from 'react'
import { NavLink } from 'react-router-dom'
import AllImage from '../../Components/AllImage/AllImage'
import Button from '../../Components/Button/Button'
import Text from '../../Components/Texts/Text'
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <div className='HomeContainer'>
                <div className='Home-mid'>
                    <div className='HomeMid-left'>
                        <Text TextName={'BHAWESH PANDEY'} Size={'44px'} textColor={'white'}/>
                        <br/>
                        <Text TextName={'I am Bhawesh Pandey . I am Fronten developer currently living in a uttarakhand (INDIA),'} Size={'14px'} textColor={'#9C9C9C'} />
                        <Text TextName={'currently building the moblie and web application for a newly Start Up ,bsite for us .'} Size={'14px'} textColor={'#9C9C9C'} />
                        <br/>
                        <NavLink to='./Contact' >
                        <Button ButtonName={'Contact Me'} bgColor={'#3F8E00'} Size={'16px'} textcolor={'#ffffff'} width={'307px'} height={'60px'}/>
                        </NavLink>
                    </div>
                    <div className='HomeMid-right'>
                        <img className='pic' height='300px' width='300px' src={AllImage.Bhawesh} />
                    </div>
                </div>
                <div className='Home-footer'>
                    <Text TextName={'Work with'} textColor={'#9C9C9C'} Size={'20px'} />
                    <div className='Home-footBox'>
                        <Text TextName={'Highpolar Softwares'} textColor={'#9C9C9C'} Size={'20px'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home