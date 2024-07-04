import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("Message sent successfully")


    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div id="contact1">
      <h5 id="contact" className="text-5xl font-semibold text-white text-center my-10 border-b-4 w-[30%] mx-auto py-5 border-yellow-400 ">For Contact</h5>
      <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4 flex items-center gap-2">
              Fill in the form to start conversation or <FiArrowDown />
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-4">
                <CgMail className="text-2xl" />
                <span>saidulislams9028@gmail.com</span>
              </p>
              <p className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl" />
                <span>+8801639279028</span>
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100024676355421"
                target="_blank"
                className="flex items-center gap-4"
              >
                <RiMessengerLine className="text-2xl" />
                <span>Saidul</span>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block border p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                rows="3"
                placeholder="write your message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full p-2 rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus:dark:ring-violet-600 bg-gray-800 dark:bg-gray-100"
              ></textarea>
            </label>
            <button 
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
