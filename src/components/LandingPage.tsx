'use client';

import React from 'react';
import Link from 'next/link';
import { AddToCartButton } from './AddToCartButton';
import { PRODUCTS_DATA } from "@/lib/productData";
import { formatCurrency } from '@/utils/currency';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white mt-40 md:mt-24">

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

      {/* Featured Products */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2 mb-16">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
              Popular Categories
            </h2>
          </div>

        <ul
          role="list"
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
        >
          {PRODUCTS_DATA.map((product) => (
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
                    className="w-full sm:w-auto rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-black bg-[#12b190] hover:bg-[#12b190] transition sm:text-white sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Service & Support Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-12 md:mb-16">
            SERVICE & SUPPORT
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Image */}
            <div className="w-full">
              <img
                src="/images/jobobike-retail.png"
                alt="Service and Support"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Right Side - Service Cards */}
            <div className="space-y-6">
              {/* Test Point Card */}
              <div className="bg-[#12b190] rounded-lg p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <Link href="/contact">
                    <h3 className="text-xl font-bold mb-2">Test point</h3>
                    <p className="text-sm leading-relaxed">
                      Jobobike offers test rides at our factory in Warsaw. Find your nearest
                      shop and arrange a test ride now.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Service at your fingertips Card */}
              <div className="bg-gray-100 rounded-lg p-6 hover:bg-[#12b190] text-black  hover:text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <Link href="/contact">
                    <h3 className="text-xl font-bold mb-2 ">
                      Service at your fingertips
                    </h3>
                    <p className="text-sm  leading-relaxed">
                      Professional service team to support you in fitting, repairing and
                      maintaining e-bikes.
                    </p>
                  </Link>
                </div>
              </div>

              {/* JOBOBIKE Retail Card */}
              <div className="bg-gray-100 rounded-lg p-6 hover:bg-[#12b190] text-black  hover:text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <Link href="/contact">
                    <h3 className="text-xl font-bold mb-2 ">JOBOBIKE Retail</h3>
                    <p className="text-sm  leading-relaxed">
                      Pick up your ideal electric bike at Jobobike retail. 80+ dealers for
                      your choice.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;