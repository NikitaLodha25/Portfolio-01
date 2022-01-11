import React from 'react'
import linkedin from '../../../assets/icons/linkedin.png'
import instagram from '../../../assets/icons/instagram.png'
import github from '../../../assets/icons/github.png'
import twitter from '../../../assets/icons/twitter.png'
import './social-contact.css'
function SocialContact() {
    const data=[
        {
            platform:"Instagram",
            link:"https://www.instagram.com",
            icon:instagram,
        },
        {
            platform:"Twitter",
            link:"https://www.twitter.com",
            icon: twitter,
        },
        {
            platform:"LinkedIn",
            link:"https://www.linkedin.com",
            icon: linkedin,
        },
        {
            platform:"GitHub",
            link:"https://www.github.com",
            icon: github,
        },
    ];
    return (<div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className='socail-icon-div'>
                        <img src={item.icon} className="social-icon"/>
                        </div>
                    </a>
            )})}
        </div>
        );
}

export default SocialContact;
