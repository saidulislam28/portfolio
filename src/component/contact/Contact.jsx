import { useRef, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lzlten9', 'template_yi6d4ls', form.current, {
        publicKey: 'cf4UHtPO-iuc0Lf0D',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleMessengerClick = () => {
    const userName = "Saidul Islam";
    const messengerURL = `https://m.me/${userName}`
    window.open(messengerURL, '_blank');
}

const handleWhatsAppClick = () => {
  const phoneNumber = '+8801639279028';
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;
  window.open(whatsappURL, '_blank');
};



  return (
    <div className="py-10" id="contact1">
      <h5 id="contact" className="text-2xl lg:text-5xl font-semibold text-white text-center my-10 border-b-4 w-[70%] lg:w-[30%] mx-auto py-5 border-yellow-400">For Contact</h5>
      <section className="py-6 bg-gray-800 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4 flex items-center gap-2">
              Fill in the form to start conversation or <FiArrowDown />
            </p>
            <div className="space-y-4">
              <p className="cursor-pointer flex items-center gap-4">
                <CgMail className="text-2xl" />
                <span>saidulislams9028@gmail.com</span>
              </p>
              <p onClick={handleWhatsAppClick}  className="cursor-pointer flex items-center gap-4">
                <FaWhatsapp className="text-2xl" />
                <span>+8801639279028</span>
              </p>
              <p onClick={handleMessengerClick}
               
                className="cursor-pointer flex items-center gap-4"
              >
                <RiMessengerLine className="text-2xl" />
                <span>Saidul</span>
              </p>
            </div>
          </div>

          <form onSubmit={sendEmail} ref={form}  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                
                className="border p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="your email"
                name="email"
                
                className="block border p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                rows="3"
                placeholder="write your message"
                
                className="block w-full p-2 rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded bg-green-400 font-bold focus:ring hover:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
