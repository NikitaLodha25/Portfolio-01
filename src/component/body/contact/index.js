import React from 'react'
import SocialContact from '../../common/social-contact'
import Resume from '../../../assets/NikitaLodha_Resume.pdf'
import Separator from '../../common/social-contact/seperator'
import './contact.css'
function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
            <div className='contact-left'>
                <p>Want to get in touch!? Contact me on any platform!!</p>
                <SocialContact/>
            </div>
            <div className='download'>
            <a download href={Resume}>
                <i class='fi-rr-cloud-download download-icon'/>
                Download Resume
            </a>
        </div>
        </div>
        </div>
    )
}

export default Contact
