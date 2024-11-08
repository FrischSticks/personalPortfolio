import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Socials from './Socials';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css'; // Import CSS using Next.js's built-in CSS Modules

// Initialize emailjs
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  // blockList: {
  //   // Block the suspended emails
  //   list: ['foo@emailjs.com', 'bar@emailjs.com'],
  //   // The variable contains the email address
  //   watchVariable: 'userEmail',
  // },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send'); // Initialize button text
  const [isMessageSent, setIsMessageSent] = useState(false);
  const phoneNumber = 8125286288;

  const { register, handleSubmit, errors, reset } = useForm(); // Use useForm hook

    // Ensure that the errors object is defined before accessing its properties
    const nameError = errors && errors.name ? errors.name.message : '';
    const emailError = errors && errors.email ? errors.email.message : '';
    const messageError = errors && errors.message ? errors.message.message : '';

  const submitForm = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    // Your emailjs.sendForm logic here
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 'template_wgjywnp', '#' + styles.contactForm)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsMessageSent(true); // Set flag for styling
        setButtonText('Message Sent!'); // Update button text on success
        reset();
         // Reset button state after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setButtonText('Send');
          setIsMessageSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setButtonText('Message Failed to Send'); // Update button text on success
        // Reset button state after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setButtonText('Send');
          setIsMessageSent(false);
        }, 5000);
      });
  };

  return (
  <div id='contact' className='mt-[60%] mx-10 lg:mt-[100%] xl:mt-[60%] md:h-screen m-20 scroll-mt-36'>
    <h1 className='text-[#6a1a2b] pb-1 mb-6 uppercase tracking-wider'>Contact</h1>
        <div className={styles.contact}>
          <form id={styles.contactForm} onSubmit={handleSubmit(submitForm)}>
            <label id={styles.user_name} htmlFor="user_name"> Name</label>
            <input type="text" name="name" 
              {...register('name', { required: true })} />
               {nameError && <p>{nameError}</p>}
            <label id={styles.user_email} htmlFor="user_email">Email</label>
            <input type="email" name="email"
              {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}/>
              {emailError && <p>{emailError}</p>}
            <label htmlFor="message" className={styles.user_message}>Message</label>
            <textarea id={styles.message} name="message" {...register('message', { required: true })} />
            {messageError && <p>{messageError}</p>}
            <input id={styles.submitBtn} type="submit" value={buttonText}
            // CONDITIONAL CLASS NAME
              className={isMessageSent ? 'greenButton' : ''}
            />
          </form>
          <a href={`tel:${phoneNumber}`} className={styles.phoneNumber}>812-528-6288</a>
        </div>
      <Socials />
    </div>
  );
};

export default Contact