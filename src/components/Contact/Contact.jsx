import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s8y52ym", 
        "template_id9jrnm", 
        form.current,
        "bKLiB0GqJlpqJRnQW" 
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          alert("Response sent successfully!");
        },
        (error) => {
          console.error("Error: ", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); 
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
           <ContactInfo/>

            <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
