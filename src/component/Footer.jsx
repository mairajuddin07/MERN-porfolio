import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-300 py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
          <p>PECHS Block 2 F/22 karachi</p>
          <p>Karachi</p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
          <p>03109155602</p>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Send Us Email</h3>
          <p className="hover:text-yellow-400 cursor-pointer transition-colors">
            mairaju587@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Mairaj - 2023 | All Rights Reserved
      </div>
    </footer>
  );
}
