import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Contact Form */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Have questions or need assistance? Reach out to us!
          </p>
          <ul className="text-gray-600">
            <li className="mb-2">Email: info@securenet.com</li>
            <li className="mb-2">Phone: +1 (123) 456-7890</li>
            <li>Address: 123 SecureNet St, City, Country</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;