'use client';

import React from 'react';
import Link from 'next/link';
import { AddToCartButton } from './AddToCartButton';
import { PRODUCTS_DATA } from "@/lib/productData";
import { formatCurrency } from '@/utils/currency';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white mt-32 md:mt-24">

      {/* Hero Section */}
      <section className="flex justify-center items-center sm:m-0">
        <img
          src="/images/banner.jpg"
          alt="DYU E-Bikes"
          className="max-h-[600px] w-auto md:object-contain md:max-w-7xl md:px-4 sm:px-2"
        />
      </section>

      {/* Why Trust Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
              WHY TRUST JOBOBIKE?
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#12b190] mb-2 md:mb-3">
                300+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                Partners in Europe
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#12b190] mb-2 md:mb-3">
                50000+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                Sold Electric Bikes
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#12b190] mb-2 md:mb-3">
                100000+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                Jobobike Fans
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#12b190] mb-2 md:mb-3">
                20+
              </div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                Experience in Ebike Manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* ===== Popular Categories Section ===== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            POPULAR CATEGORIES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-center text-center">
            {/* Fat Tire */}
            <Link href="/category/fat-tire">
              <div>
                <img
                  src="/images/mover/mover-1.png"
                  alt="Fat Tire"
                  className="mx-auto w-72 h-60 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-lg">
                  <span>Fat Tire</span>
                  <span className="text-[#12b190]">➜</span>
                </div>
              </div>
            </Link>

            {/* lightweight */}
            <Link href="/category/lightweight">
              <div>
                <img
                  src="/images/lyon/lyon-1.png"
                  alt="Step-thru"
                  className="mx-auto w-72 h-60 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-lg">
                  <span>Lightweight</span>
                  <span className="text-[#12b190]">➜</span>
                </div>
              </div>
            </Link>

            {/* Cargo & Family */}
            <Link href="/category/cargo">
              <div>
                <img
                  src="/images/eddy-x/eddy-1.png"
                  alt="Cargo & Family"
                  className="mx-auto w-72 h-60 object-contain"
                />
                <div className="mt-3 flex justify-center items-center gap-1 text-black font-medium text-lg">
                  <span>Cargo & Family</span>
                  <span className="text-[#12b190]">➜</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2 mb-16">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
              Popular E-Bikes
            </h2>
          </div>

        <ul
          role="list"
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
        >
          {PRODUCTS_DATA.slice(0,6).map((product) => (
            <li
              key={product.id}
              className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black"
            >
              <div className="relative mb-2 sm:mb-3">
                <Link href={`/products/${product.slug}`}>
                  <img
                    className="object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline leading-tight">
                  <Link href={`/products/${product.slug}`} className="break-words">
                    {product.name}
                  </Link>
                </h3>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1 min-w-0">
                  {product.price < product.originalPrice ? (
                    <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                        {formatCurrency(product.price)}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                      {formatCurrency(product.price)}
                    </span>
                  )}
                </div>

                <div className="mt-2 sm:mt-0 sm:ml-2 flex-shrink-0">
                  <AddToCartButton
                    product={product}
                    className="w-full sm:w-auto rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-white bg-[#12b190] hover:bg-[#12b190] transition   sm:bg-black sm:hover:border-black  sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path d="M 200 50 Q 350 200 200 350 Q 50 200 200 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Quote Icon */}
          <div className="flex justify-start mb-8">
            <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-300" fill="currentColor" viewBox="0 0 100 100">
              <path d="M20,45 Q15,30 25,25 Q35,20 40,30 L35,45 L45,45 L45,70 L20,70 Z"/>
              <path d="M55,45 Q50,30 60,25 Q70,20 75,30 L70,45 L80,45 L80,70 L55,70 Z"/>
            </svg>
          </div>

          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#12b190] text-base md:text-lg font-medium mb-3">
              Transport and exercise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
              CERTIFICATES
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl leading-relaxed">
              JOBOBIKE achieves a great combination of transport and exercise. Our e-bikes have obtained the following professional certifications.
            </p>
          </div>

         

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            {/* ISO Certificate */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="/images/certification-iso.webp"
                  alt="ISO Certificate"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>

            {/* CE EN15194 Certificate */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="/images/certification-ce.webp"
                  alt="CE EN15194 Certificate"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>

            {/* RoHS Certificate */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="/images/certification-rohs.webp"
                  alt="RoHS Certificate"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    
      

    </div>
  );
};

export default LandingPage;