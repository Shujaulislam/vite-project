import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-purple-700">Company</h3>
            <p className="text-gray-600 text-sm">Building the future of web development, one component at a time.</p>
          </motion.div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-700">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  <a href="#" className="text-sm">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-700">Connect</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-purple-600 hover:text-purple-800 text-sm"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-700">Newsletter</h3>
            <form className="space-y-2">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-purple-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
