import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import './Contact.scss';
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) =>{
    e.preventDefault()
    
    emailjs   
    .sendForm(
        'gmail',
        'template_q0uch08',
        refForm.current,
        'ekKvxC14WvHh9iJqe'
    )
    .then (
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, especially ambitious or
            large projects. However, if you have other request or questions
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form action="submit" ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input type="text" placeholder="Subject" name="subject" />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          <div className="info-map">
            Alinwachukwu Michael 
            <br />
            Nigeria,
            <br />
            17 Black Street, Ikeja,
            <br />
            Enugu state. 
            <br />
            <span>Saintmichaell42@gmail.com</span>
          </div>
          <div className="map-wrap"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
