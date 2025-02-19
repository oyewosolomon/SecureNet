import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Check
} from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (

      <div className="bg-purple-600 py-24" id='contact'>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Events?</h2>
              <p className="text-purple-100 mb-8">
                Get in touch with our team to discover how VirtualStage can elevate your virtual events.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 placeholder-purple-200 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 placeholder-purple-200 focus:outline-none focus:border-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 placeholder-purple-200 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 placeholder-purple-200 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400 placeholder-purple-200 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-purple-100">support@virtualstage.com</p>
                  <p className="text-purple-100">sales@virtualstage.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-purple-100">+1 (888) 123-4567</p>
                  <p className="text-purple-100">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-purple-100">123 Tech Plaza</p>
                  <p className="text-purple-100">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;