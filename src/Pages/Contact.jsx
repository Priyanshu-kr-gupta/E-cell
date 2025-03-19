import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../Css/Contact2.css";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false });

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-center text-3xl sm:text-6xl sm:mt-0 mt-4'>Get in Touch with us</h2>
          <p className='mx-auto text-center sm:max-w-[1080px] mb-12 sm:text-[20px] text-sm max-w-md'>
            Welcome to the Entrepreneurship Cell at National Institute of Technology Jamshedpur! We value your interest and inquiries. Whether you're a student, an aspiring entrepreneur, or a potential collaborator, we're here to assist you.
          </p>
        </motion.div>

        <div className="row sm:p-16 p-4">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className="contact-info-content">
                <h4>Address</h4>
                <p className='text-left'>NIT Jsr, Adityapur 2, <br /> Jamshedpur, Jharkhand</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>+91 987654321</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>ecell@nitjsr.ac.in</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form action="" id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" required name="name" />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="email" required name="email" />
                <span>Email</span>
              </div>
              <div className="input-box">
                <textarea required name="message"></textarea>
                <span>Type your Message Here...</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" name="submit" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;