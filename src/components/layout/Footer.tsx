import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Lock,
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Check
} from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                {submitted && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {/* <Globe className="w-6 h-6 text-purple-600" /> */}
             
            <Lock className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold">NetGuard</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 NetGuard. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;