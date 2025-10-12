'use client';

import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 mt-32 md:mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About JOBOBIKE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JOBOBIKE-Trustworthy E-bike
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Company Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JOBOBIKE has been specialising in the production of e-bikes for over 20 years, focusing on quality and innovation, making it the most reliable choice for you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JOBOBIKE has been present in the e-bike market for two decades. We have been producing bikes for well-known worldwide clients brands. Helping others to succeed has resulted in our own success. Today, we are one of the leading companies in the e-bike industry.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Moreover, our lifetime customer service is always with you.
          </p>
        </section>

        {/* Factory & Production */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Factory</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">China Manufacturing Base</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>50,000㎡ production facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>3 assembly lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>300,000+ bikes annual production capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>16 QC testing equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>35 R&D professionals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">European Operations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>Established in Poland in 2019</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>6,000㎡ facility near Warsaw</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>2 assembly lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>50+ skilled staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#12b190] mr-2">✓</span>
                  <span>30,000+ bikes annual capacity</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#12b190] transition-colors">
              <div className="text-4xl font-bold text-[#12b190] mb-4">ISO9001</div>
              <p className="text-gray-700">Quality Management System Certified</p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#12b190] transition-colors">
              <div className="text-4xl font-bold text-[#12b190] mb-4">EN15194</div>
              <p className="text-gray-700">European E-Bike Safety Standard</p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#12b190] transition-colors">
              <div className="text-4xl font-bold text-[#12b190] mb-4">40+</div>
              <p className="text-gray-700">Patents & Innovations</p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment</h2>
          <div className="bg-[#12b190] text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="leading-relaxed">
                  We continuously invest in research and development to create cutting-edge e-bikes that combine style, performance, and sustainability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="leading-relaxed">
                  Every JOBOBIKE undergoes rigorous quality control with 16 QC testing points to ensure the highest standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Service</h3>
                <p className="leading-relaxed">
                  With 300+ partners across Europe and lifetime customer service, we&apos;re always here to support your journey.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="leading-relaxed">
                  We&apos;re committed to creating eco-friendly transportation solutions that reduce carbon emissions and promote healthier lifestyles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#12b190] mb-2">20+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#12b190] mb-2">300+</div>
              <p className="text-gray-700 font-medium">Partners in Europe</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#12b190] mb-2">50,000+</div>
              <p className="text-gray-700 font-medium">Bikes Sold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#12b190] mb-2">100,000+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join the JOBOBIKE Family
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Experience the perfect blend of innovation, quality, and service. With JOBOBIKE, you&apos;re not just buying an e-bike – you&apos;re joining a community dedicated to sustainable and enjoyable transportation.
          </p>
          <a
            href="/cycle"
            className="inline-block bg-[#12b190] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0fa080] transition-colors"
          >
            Explore Our E-Bikes
          </a>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;