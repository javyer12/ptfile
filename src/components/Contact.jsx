import React from 'react';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
const Contact = () => {
    const [ success, setSuccess ] = useState();
    const form = useRef();

    const successed = () => (
        <div className="alert alert-success" role="alert">
            !!!Your email was sent successfully!!
        </div>
    )
    const danger = () => (
        <div className="alert alert-danger" role="alert">
            Something was wrong, email not sent!! Give it a try again.
        </div>
    )
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uxjj46m', 'template_3m8lg5h', form.current, 'aOGlAQ7WONiaNba-b')
            .then((result) => {
                setSuccess(successed)
                e.target.reset();
                console.log(result.text);
            }, (error) => {
                setSuccess(danger)
                e.target.reset()
                console.log(error.text);
            });
    };
    setTimeout(() => { setSuccess(' ') }, 5000)
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>javyermurillo1@gmail.com</h5>
                        <a href="mailto:javyermurillo1@gmail.com" target="_blank" rel="noopener norefer">Send me  a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+504 99402691</h5>
                        <a href="https://api.whatsapp.com/send?phone=50499402691" target="_blank" rel="noopener norefer">Send me  a message</a>
                    </article>
                </div>
                {/* end of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    {success}
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Write your message" required rows='7'></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;