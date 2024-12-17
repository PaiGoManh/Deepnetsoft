import React from 'react';
import img4 from '../assets/img4.png';

const Footer = () => {
  return (
    <div className="bg-black text-white md:py-10 md:px-5 px-8 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="border border-gray-600 p-4 rounded-lg">
          <p className="text-blue-500 font-semibold">CONNECT WITH US</p>
          <p className="mt-2 text-sm">
            <i className="fas fa-phone-alt"></i> +91 9567843340
          </p>
          <p className="mt-1 text-sm">
            <i className="fas fa-envelope"></i> info@deepnetsoft.com
          </p>
        </div>

        <div className="border border-gray-600 p-4 rounded-lg">
          <img
            src={img4} 
            alt="Deep Net Soft Logo"
            className="mx-auto mb-4 h-12"
          />
          <p className="text-blue-500 font-semibold">DEEP <span className="text-gray-200">NET</span> <span className="text-gray-400">SOFT</span></p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="border border-gray-600 p-4 rounded-lg">
          <p className="text-blue-500 font-semibold">FIND US</p>
          <p className="mt-2 text-sm">
            <i className="fas fa-map-marker-alt"></i> First Floor, Geo Infopark,
          </p>
          <p className="text-sm">Infopark EXPY, Kakkanad</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between text-sm text-gray-400">
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;