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
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Motta våre nyhetsbrev</h3>
            <p className="text-sm text-gray-600 mb-4">
              Få nyheter, tips og eksklusive tilbud rett i innboksen.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-post"
                className="w-full border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#58c0c2]"
              />
              <button className="bg-[#58c0c2] text-black px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-[#58c0c2] transition">
                Meld inn
              </button>
            </div>
            <div className="flex gap-4 mt-5">
              <FaInstagram className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
              <FaTiktok className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
              <FaFacebook className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
              <FaPinterest className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
              <FaYoutube className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
              <FaXTwitter className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#58c0c2]" />
            </div>
          </div>

          {/* Handle */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Handle</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/el-sykler" className="hover:text-[#58c0c2]">Alle el-sykler</Link></li>
              <li><Link href="/tilbehor" className="hover:text-[#58c0c2]">Tilbehør</Link></li>
              <li><Link href="/reservedeler" className="hover:text-[#58c0c2]">Reservedeler</Link></li>
              <li><Link href="/kampanjer" className="hover:text-[#58c0c2]">Nyheter og kampanjer</Link></li>
              <li><Link href="/gavekort" className="hover:text-[#58c0c2]">Gavekort</Link></li>
            </ul>
          </div>

          {/* Sykkellageret */}
          <div>
            <h3 className="font-semibold mb-3 text-base">SYKKELLAGERET</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/om-oss" className="hover:text-[#58c0c2]">Om oss</Link></li>
              <li><Link href="/barekraft" className="hover:text-[#58c0c2]">Bærekraft og miljø</Link></li>
              <li><Link href="/b2b" className="hover:text-[#58c0c2]">Bedriftsavtaler (B2B)</Link></li>
              <li><Link href="/affiliate" className="hover:text-[#58c0c2]">Samarbeidspartner</Link></li>
              <li><Link href="/blogg" className="hover:text-[#58c0c2]">Blogg & artikler</Link></li>
            </ul>
          </div>

          {/* Kundeservice */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Kundeservice</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/faq" className="hover:text-[#58c0c2]">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#58c0c2]">Kontakt oss</Link></li>
              <li><Link href="/returns" className="hover:text-[#58c0c2]">Retur og reklamasjon</Link></li>
              <li><Link href="/privacypolicy" className="hover:text-[#58c0c2]">Personvernerklæring</Link></li>
              <li><Link href="/terms" className="hover:text-[#58c0c2]">Kjøpsvilkår</Link></li>
              <li><Link href="/bruksanvisninger" className="hover:text-[#58c0c2]">Bruksanvisninger</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact + Payments */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-6 text-sm">
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Kontakt oss</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <HiOutlineEnvelope className="w-4 h-4 text-[#58c0c2]" />
                support@sykkellageret.no
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-4 text-[#58c0c2]" />
                [sett inn tlf.nr]
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBuildingOffice2 className="w-4 h-4 text-[#58c0c2]" />
                [adresse]
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-3 pr-24">Betalingsmetoder</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <img src="/images/vipps.png" alt="Vipps" className="h-8 object-contain" />
              <img src="/images/visa.png" alt="Visa" className="h-8 object-contain" />
              <img src="/images/mastercard.png" alt="Mastercard" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-500">
          © 2025 <span className="text-[#58c0c2] font-semibold">Sykkellageret <span className="text-gray-500">-</span>Jalut Holdings</span>. Org nr: 931946641. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
