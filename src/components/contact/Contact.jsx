import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3tordn', 'template_bb1223j', form.current, 'bSfH4KyZBBnEEvZw6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_methods'>
                    <article className='contact_method'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>xuluohao@outlook.com</h5>
                        <a href='mailto:xuluohao@outlook.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact_method'>
                        <AiOutlineWhatsApp className='contact_icon' />
                        <h4>WhatsApp</h4>
                        <h5>+44 (0)7536247382</h5>
                        <a href='https://api.whatsapp.com/send?phone=+447536247382' target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Messgae' required />
                    <button type='submit' className='btn btn-variant'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact