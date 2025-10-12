'use client';

import React from 'react';
import Link from 'next/link';

const AfterSalesService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-32 md:mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-[#12b190]">Home</Link>
            <span className="mx-2">&gt;</span>
          
            <span className="text-gray-900">After-sales Service</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          After-sales Service
        </h1>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: About Delivery */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              I. About Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All orders will be shipped within 3 days on working days after successful payment except the pre-sale orders. If the delivery needs to be delayed due to force majeure or other special circumstances, such as holidays, the delivery time shall be subject to the page notice or customer service notice; the pre-sale order shall be subject to what the order shows after the order is placed.
            </p>
          </section>

          {/* Section 2: Customers */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              II. Customers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Customers need to inspect the goods within 3 working days after receiving our products. If the product is found to be damaged or defective in quality, the Maintenance Form is needed to submit to our company in time. If it is true, our company will provide the free maintenance parts. In case of serious damage, the two parties shall negotiate a solution. The product will be considered as a normal one if it exceeds 3 days.
            </p>
          </section>

          {/* Section 3: About Return and Exchange */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              III. About Return and Exchange
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In order to make customers who choose our products to have a better experience, we therefore provide a 20-day no reason return and exchange service (20 days refers to 20 natural days from the invoice date). If you are not satisfied with the product, you can apply for product return or exchange. You can contact customer service for a refund or exchange (the wearing parts of e-Bike are not significantly worn, we require that its test ride distance should not be more than 10km).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please keep the packing carton for at least 20 days, in order to securely package the product for return.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If the goods are returned or exchanged due to non-quality problems, the buyer shall bear the freight back and forth, and must ensure that all parts are complete and free of damage. If the parts are missing or e-Bike is damaged during the return process, the buyer need to pay the loss of the parts. If you want to cancel the purchase after placing an order online and before shipping, the buyer can meet the above conditions, JOBOBIKE will refund after deducting the freight. If the returned e-Bike has obvious signs of use or loss, JOBOBIKE will refund after deducting the freight and 20% of e-Bike fee as the handling fee. If the return or exchange is due to quality problems, JOBOBIKE will bear the freight back and forth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The return and exchange service does not apply to the damage caused by accident, misuse, abuse or negligence, modification to the frame or parts by the customer will make the return and exchange service invalid.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In any case, we do not recommend the return of goods. That the customer places an order means that the buyer and seller come to an agreement.
            </p>
          </section>

          {/* Section 4: About Parameters */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              IV. About Parameters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our company tries to do what you see is what you get. In order to provide consumers with an exchange experience, we always upgrade the performance, configuration and reliability of the product. If the page description cannot be filled up to product upgrade, please refer to the actual product. We promise that the upgraded product will not affect your riding experience and ensure that the performance of the e-Bike will be better than that of the old version. Therefore, nuances will not be used as the basis for description discrepancies.
            </p>
          </section>

          {/* Section 5: About parts */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              V. About parts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provide parts and accessories at any time and guarantee that the inventory is sufficient. The normal wear and tear of all the wearing parts (including but not limited to tyres, bearings, chains, battery, etc.) is not covered by the guarantee. When the wearing parts need to be replaced, customers can purchase new parts from us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AfterSalesService;