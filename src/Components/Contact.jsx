import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contain-content h-full w-full pl-4 pr-4 sm:pl-32 sm:pr-32 pt-8 sm:pt-36">
        <div className="cont-headtext underline decoration-red-600 underline-offset-6 text-gray-300 font-semibold text-[20px] uppercase pb-4">
          Get In Touch
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="cont-left text-white pt-6 text-justify text-xl sm:text-2xl font-medium tracking-wider">
            <div>
              Lets create something amazing together! Whether you have a project
              in mind, a question, or just want to say hello, feel free to reach
              out. I'm always excited to connect and collaborate.
            </div>
            <div className="capitalize mt-20 text-center sm:text-left flex flex-col">
              Connect with me
              <div className="flex mt-4 justify-center sm:justify-start">
                <a
                  className="border hover:border-red-500 hover:border-2 rounded-lg text-center py-3 px-4 mr-4 "
                  href="https://www.linkedin.com/in/rudra-patel-a1914a234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
                <a
                  className="border hover:border-red-500 hover:border-2 rounded-lg text-center py-3 px-4 mr-4 "
                  href="https://www.linkedin.com/in/rudra-patel-a1914a234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
                <a
                  className="border hover:border-red-500 hover:border-2 rounded-lg text-center py-3 px-4 mr-4 "
                  href="https://www.linkedin.com/in/rudra-patel-a1914a234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
                <a
                  className="border hover:border-red-500 hover:border-2 rounded-lg text-center py-3 px-4 "
                  href="https://www.linkedin.com/in/rudra-patel-a1914a234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="cont-right flex items-center justify-center   ">
            <div className="max-w-2xl w-full p-6   shadow-md rounded-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-white w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full text-white px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-1 block w-full text-white px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-gray-300 resize-y min-h-[120px] focus:border-red-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fb5a5a] font-bold text-white py-2 px-4 rounded-md hover:bg-[#f24545] cursor-pointer transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
