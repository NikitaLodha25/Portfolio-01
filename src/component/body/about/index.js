import React from 'react'
import Image from './coding.png'
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                Hello There😄!! I am 
                <br/> <span className='info-name'>Nikita Lodha,</span>
                <br />a random person who is just experimenting with the WEB.
                </div>
                <div className='about-photo'></div>
                <img src={Image} alt='i am image' className='picture'/>
            </div>
            <SocialContact />
        </div>
    );
}

export default About
