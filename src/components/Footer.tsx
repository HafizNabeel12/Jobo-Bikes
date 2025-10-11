"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
   
       

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-500">
          Â© 2025 <span className="text-[#12b190] font-semibold">Sykkellageret <span className="text-gray-500">-</span>Jalut Holdings</span>. Org nr: 931946641. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
