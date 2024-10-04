import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input className="w-full mb-4 p-3 border border-gray-300 rounded-md" type="text" placeholder="Your Name" />
          <input className="w-full mb-4 p-3 border border-gray-300 rounded-md" type="email" placeholder="Your Email" />
          <textarea className="w-full mb-4 p-3 border border-gray-300 rounded-md" placeholder="Your Message" rows="5"></textarea>
          <button className="px-6 py-3 bg-blue-500 rounded-md text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
