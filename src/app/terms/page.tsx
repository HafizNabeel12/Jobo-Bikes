'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Link from 'next/link'

interface AccordionItem {
  id: string
  title: string
  content: string
}

const TermsOfService: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const accordionItems: AccordionItem[] = [
    {
      id: 'parter',
      title: '1. Parter',
      content: `Disse vilkÃ¥rene gjelder mellom Sykkellageret AS (org.nr [sett inn org.nr]) og kunden (Â«du/degÂ»). Ved Ã¥ handle pÃ¥ sykkellageret.no aksepterer du disse vilkÃ¥rene.`
    },
    {
      id: 'bestilling',
      title: '2. Bestilling',
      content: `NÃ¥r du legger inn en bestilling, mottar du en ordrebekreftelse pÃ¥ e-post. 

Du vil ogsÃ¥ motta en digital bruksanvisning for produktet pÃ¥ e-post.

Avtalen er bindende nÃ¥r du har mottatt ordrebekreftelsen.
`
    },
    {
      id: 'betaling',
      title: '3. Betaling',
      content: `Vi tilbyr betaling med Vipps, Visa, Mastercard og Klarna.

BelÃ¸pet trekkes nÃ¥r varen sendes fra vÃ¥rt lager.`
    },
    {
      id: 'levering',
      title: '4. Levering',
      content: `Estimert leveringstid er 7â€“14 virkedager.

Vi leverer kun innen Norge.

Fraktkostnad vises fÃ¸r betaling.`
    },
    {
      id: 'angrerett',
      title: '5. Angrerett',
      content: `Du har 14 dagers angrerett etter Angrerettloven.

Varen mÃ¥ vÃ¦re ubrukt og i original emballasje.

Returfrakt betales av kunden.`
    },
    {
      id: 'reklamasjon',
      title: '6. Reklamasjon',
      content: `Du har 2 Ã¥rs reklamasjonsrett etter ForbrukerkjÃ¸psloven.

Reklamasjonen gjelder feil som ikke skyldes normal slitasje eller feil bruk.`
    },
    {
      id: 'personvern',
      title: '7. Personvern',
      content: `Vi behandler personopplysninger i samsvar med vÃ¥r personvernerklÃ¦ring og gjeldende lover (GDPR).`
    }
  ]

  return (
    <div className="min-h-screen mt-52 md:mt-36">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">VilkÃ¥r</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
            KjÃ¸psvilkÃ¥r
          </h1>
          <p className="text-gray-600 text-center">
            Vennligst les disse vilkÃ¥rene nÃ¸ye fÃ¸r du handler hos oss
          </p>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-gray-200 ${index === accordionItems.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openAccordion === item.id}
                aria-controls={`accordion-content-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openAccordion === item.id ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {openAccordion === item.id && (
                <div
                  id={`accordion-content-${item.id}`}
                  className="px-6 pb-6 pt-2 animate-fade-in"
                >
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default TermsOfService
