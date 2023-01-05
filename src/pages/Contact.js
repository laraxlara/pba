import React from 'react'

import branding from '../images/branding.jpg'

import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[400px] bg-cover bg-fixed bg-center flex justify-center items-center">
        <img className="ixed w-full h-full object-cover object-center" src={branding} alt='/' />
      </div>
      <div className='contact-form-wrapper'>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
