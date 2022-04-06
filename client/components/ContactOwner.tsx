import React from 'react'
import {IoLogoWhatsapp} from 'react-icons/io'
import IconButtons from './Buttons/IconButtons'
import InputButton from './Buttons/InputButton'

const ContactOwner = () => {
  return (
    <div className='contact-owner'>
        <h3 className='contact-owner__title'>Contact Owner</h3>
        <div className='contact-owner-info'>
            <img src="/robert_blue.jpg" alt="" />
            <div className='contact-owner-info-section'>
                <h3 className='contact-owner-info-section__title'>Kemal Bekcan</h3>
                <div className='contact-owner-info-section-whatsapp'>
                <IoLogoWhatsapp className='contact-owner-info-section-whatsapp-icon'/>
                +905467218291
                </div>
            </div>    
        </div>
        <IconButtons message={'Visit Page'}/>
        <form>
            <input type="text" placeholder='Name *' />
            <input type="text" placeholder='E-mail *' />
            <input type="text" placeholder='Phone *' />
            <textarea placeholder='Message *'></textarea>
            <InputButton message={"Send Message"}/>
        </form>
    </div>
  )
}

export default ContactOwner