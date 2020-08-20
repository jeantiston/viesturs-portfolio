import React from 'react'

import SectionHeader from '@components/sectionheader'

import contactStyles from '@styles/contact.module.css'

const Contact = () => {

    return (
        <div id="contact" >
            <SectionHeader name="Get In Touch" />
            <p className={contactStyles.desc}>
                Do you have a project in mind or just want to say hi? Feel free to drop me a message! I’ll get back to you as soon as I can.
            </p>
            <form method="post" action="#" className={contactStyles.contactForm} >
                <input className={contactStyles.input} type="text" name="name" id="name" placeholder="Name" />
                <input className={contactStyles.input} type="email" name="email" id="email" placeholder="Email" />
                <input className={contactStyles.input} type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea className={contactStyles.input} name="message" id="message" rows="5" placeholder="Message" />
                <br />
                <button type="submit">Send</button>
            </form>
            <h1>haha</h1>
            <div style={{height: 300}}>hello</div>
        </div>
    )
}

export default Contact