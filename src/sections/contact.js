import React from 'react'

import SectionHeader from '@components/sectionheader'

import contactStyles from '@styles/contact.module.css'

const Contact = () => {

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     document.getElementById("form").classList.add(contactStyles.hidden);
    //     console.log("Submitted")
    // }

    return (
        <div id="contact" >
            <SectionHeader name="Get In Touch" />
            <div className={contactStyles.centerWrapper} >
            <div id="form" className={contactStyles.contactWrapper} >
                <p className={contactStyles.desc}>
                    Do you have a project in mind or just want to say hi? Feel free to drop me a message! I’ll get back to you as soon as I can.
                </p>
                {/* <form method="post" action="#" className={contactStyles.contactForm} > */}
                <form action="/#contact" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className={contactStyles.contactForm} >
                    <input type="hidden" name="form-name" value="contact" />
                    <input className={contactStyles.input} type="text" name="name" id="name" placeholder="Name" />
                    <input className={contactStyles.input} type="email" name="email" id="email" placeholder="Email" />
                    <input className={contactStyles.input} type="text" name="subject" id="subject" placeholder="Subject" />
                    <textarea className={contactStyles.input} name="message" id="message" rows="5" placeholder="Message" />
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div></div>
        </div>
    )
}

export default Contact