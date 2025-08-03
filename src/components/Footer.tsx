import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Sakthi Aravind. All rights reserved.
            </p>
            <p className="text-gray-300">
              104, Seven hills street, Thirumalai nagar, Ramapuram, Chennai - 600089.
            </p>
            <p className="text-gray-300">
              +91 9944912153.
            </p>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-300 mr-2">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
            <span className="text-gray-300 ml-2">and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;